---
id: tutorial
title: Tutorial
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
  integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
  crossOrigin="anonymous"
/>

Throughout this tutorial we assume that the Docker image of CYT is being used, since this the recommended installation method. If only the Python package is installed then there are some parts of this tutorial that will not work.

This tutorial is available as a [Jupyter notebook](/files/tutorial.ipynb) in case you want to follow it on JupyterLab.

## Docker Basics

There are two main ways of using the CYT Docker image. It can be used via JupyterLab or directly on the terminal. The command used to run the image is:

<Tabs
  defaultValue="jupyter"
  values={[
    {label: 'JupyterLab', value: 'jupyter'},
    {label: 'Terminal', value: 'terminal'}
  ]}>
  <TabItem value="jupyter">

```
docker run --rm -it -v ${PWD}:/home -p 8888:8888 cyt
```
Let us look at the meaning of each of the parts of this command.

<ul>
<li><code>docker run</code> This simply creates a container where the image will run.</li>
<li><code>--rm</code> This instructs Docker to remove the container once it is closed. Since the url used to access JupyterLab changes every time there is generally no point in restarting the container once it is stopped.</li>
<li><code>-it</code> This specifies that we will be running an interactive session.</li>
<li><code>-v $&#123;PWD&#125;:/home</code> This is used to mount the current directory into the <code>/home</code> directory of the container. <code>$&#123;PWD&#125;</code> can be changed to a different directory, but the full path needs to be specified.</li>
<li><code>-p 8888:8888</code> This is used to bind the port 8888 of the host computer to the port 8888 of the container so that JupyterLab can communicate. If another application is using port 8888 on the host computer then a different port can be specified before the colon, but it will also have to be changed on your browser.</li>
<li><code>cyt</code> Indicates the name of the image, which in this case is cyt.</li>
</ul>

  </TabItem>
  <TabItem value="terminal">

```
docker run --rm -it -v ${PWD}:/home cyt python
```
Let us look at the meaning of each of the parts of this command.

<ul>
<li><code>docker run</code> This simply creates a container where the image will run.</li>
<li><code>--rm</code> This instructs Docker to remove the container once it is closed. Since the url used to access JupyterLab changes every time there is generally no point in restarting the container once it is stopped.</li>
<li><code>-it</code> This specifies that we will be running an interactive session.</li>
<li><code>-v $&#123;PWD&#125;:/home</code> This is used to mount the current directory into the <code>/home</code> directory of the container. <code>$&#123;PWD&#125;</code> can be changed to a different directory, but the full path needs to be specified.</li>
<li><code>cyt</code> Indicates the name of the image, which in this case is cyt.</li>
<li><code>python</code> This is used so that Python is started instead of JupyterLab, which is the default option. It is sometimes useful to use <code>bash</code> to be dropped into a bash terminal in the container.</li>
</ul>

  </TabItem>
</Tabs>

## Using CYT

Let us now look at the basics of the CYT package. The starting objects for most computations are the Polytope and Cone classes. These can be imported using
```python
from cyt import Polytope, Cone
```

Other important classes in this toolkit are Triangulation and CalabiYau. These should generally not be directly created by the user, and instead they are produced by designated functions.

Let us take a brief look at each of these classes.

## Polytopes

First, let's take a look at the Polytope class. A Polytope object can be created by specifying a list of points defining the convex hull. Note that CYT only supports lattice polytopes so any floating point numbers will be truncated to integers.
```python
p = Polytope([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[-1,-1,-1,-1]])
```
We can print some information about the polytope as follows.
```python
p
# Prints: A 4-dimensional reflexive lattice polytope in ZZ^4
```
The list of lattice points, boundary points, interior points, etc., can be computed by self-explanatory functions.
```python
pts = p.points()
```
We can compute information relevant to Batyrev's construction of Calabi-Yau hypersurfaces when the polytope is reflexive and 4-dimensional.

:::important
We follow the convention of Batyrev and the Kreuzer-Skarke database in that the Hodge numbers are those of the Calabi-Yau hypersurface on the toric variety obtained by a desingularization of the **normal fan** of the polytope. Consequently, the Calabi-Yau obtained from obtaining an FRST of the polytope will have interchanged Hodge numbers.
:::
```python
p.h11(), p.h21()
# Prints: (101, 1)
```

## Using the KS database

CYT provides two useful functions to work with the KS database. We can import them as follows.
```python
from cyt import read_polytopes, fetch_polytopes
```
The first function takes a file name as input and reads all polytopes specified in the format used in the KS database. The second file directly fetches the polytopes from the database. For example let's fetch 100 polytopes with $h^{2,1}=7$.
```python
g = fetch_polytopes(h21=7, limit=100)
g
# Prints: <generator object read_polytopes at 0x7faf1656c3d0>
```
As you can see above, these functions return generator objects that give one polytope at a time. To get the polytopes we can use
```python
p1 = next(g)
p2 = next(g)
```
Or to get the full list of polytopes we can use
```python
l = list(g)
len(l)
# Prints: 98
```
In this example generator had a limit of 100 polytopes, but since it had already generated two in the above it produced a list of only 98.

## Triangulations

Let us now look at how we can triangulate the polytopes. We start with the following polytope
```python
p = Polytope([[1,0,0,0],[0,1,0,0],[0,0,1,0],[-1,1,1,0],[0,-1,-1,0],[0,0,0,1],[1,-2,1,1],[-2,2,0,-1],[1,0,-1,-1]])
```
We can obtain a triangulation simply by using
```python
t = p.triangulate()
```
and print information about the triangulation as follows
```python
t
# Prints: A fine, star triangulation of a 4-dimensional polytope in ZZ^4
```
Note that regularity is not checked by default, but it can be checked using
```python
t.is_regular()
# Prints: True
```
And then it will display the full information when printed again.
```python
t
# Prints: A fine, regular, star triangulation of a 4-dimensional polytope in ZZ^4
```
For 4-dimensional reflexive polytopes it defaults to finding an FRST of the points not interior to facets. Other options such as heights, whether to make it a star, the backend, etc., can be inputted as well.
```python
t = p.triangulate(heights=[0,3,7,1,9,1,1,1,3,2,2,2], make_star=True, backend="cgal")
```
Various properties of the triangulation can be accessed by self-explanatory functions.
```python
simps = t.simplices()
```
Some of these require additional software. When using the Docker image this is included, but it needs to be installed otherwise.
```python
triangs = t.neighbor_triangs()
```

## Calabi-Yaus

Let's now get to the class of most interest. A CalabiYau object can be obtained from a triangulation using.
```python
cy = t.get_cy()
```
Basic information can be printed as follows.
```python
cy
# Prints: A Calabi-Yau 3-fold hypersurface with h11=7 and h21=23 in a 4-dimensional toric variety.
```
Various properties of the CY can be accessed by self-explanatory functions. For example, intersection numbers can be computed using
```python
intnums = cy.intersection_numbers()
```

## Cones

Lastly, let's briefly look at cones. These can be constructed by specifying a set of rays or normals to hyperplanes.
```python
c1 = Cone([[0,1],[1,1]])
c2 = Cone(hyperplanes=[[0,1],[1,1]])
```
Let us look at the Mori cone of the above Calabi-Yau.
```python
mc = cy.mori_cone()
```
We can print some information about it as follows.
```python
mc
# Prints: A 7-dimensional rational polyhedral cone in RR^7 generated by 36 rays
```
The Kahler cone can be computed from the designated function, or by taking the dual.
```python
kc = mc.dual()
```
CYT uses a lazy duality where no computation is done and instead the definition of the cone is dualized. This can be seen by printing the information.
```python
kc
# Prints: A rational polyhedral cone in RR^7 defined by 36 hyperplanes.
```
However, we can still do the hard duality computation if desired.
```python
kc_rays = kc.rays()
```
And then the definition of the cone is updated.
```python
kc
# Prints: A 7-dimensional rational polyhedral cone in RR^7 generated by 18 rays.
```
We can compute the distance to the tip of the stretched Kahler cone as follows.
```python
d,v = kc.dmin(1)
```

This concludes the brief tutorial. For a full list of available classes and functions please visit the [documentation tab](/docs/documentation/).
