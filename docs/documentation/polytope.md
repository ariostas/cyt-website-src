---
id: polytope
title: Polytope Class
---

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
  integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
  crossOrigin="anonymous"
/>

This class handles all computations relating to lattice polytopes, such as the computation of lattice points and faces. It also allows the computation of topological data of the Calabi-Yau that only depends on the reflexive polytope.

## Constructor

### ```cyt.polytope.Polytope```

**Description:** Constructs a ```Polytope``` object describing a lattice polytope. This is handled by the hidden [```__init__```](#__init__) function.

:::note notes
- CYT only supports lattice polytopes so any floating point numbers will be
truncated to integers.
- The Polytope class is also imported to the root of the CYT package, so it can
be imported from ```cyt.polytope``` or from ```cyt```.
:::

**Arguments:**
- ```points``` (list): A list of points. The polytope is defined by their convex hull.
- ```backend``` (string, optional): A string that specifies the backend used to construct the convex hull.  The available options are "ppl" or "qhull".  When not specified, it uses PPL if available and QHull otherwise.

**Example:** We construct a polytope from a list of points.
```python {2}
from cyt import Polytope
p = Polytope([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[-1,-1,-1,-1]])
p
# Prints: A 4-dimensional reflexive lattice polytope in ZZ^4
```

-------------------------------------------------------------------------------

## Functions


### ```ambient_dim```

**Description:** Returns the dimension of the ambient lattice.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```automorphisms```

**Description:** Returns the GL(d,Z) matrices that leave the polytope invariant.  These
matrices act on the points by multiplication on the right.

**Arguments:**
- ```square_to_one``` (boolean, optional, default=False): Flag that
restricts to only matrices that square to the identity.

-------------------------------------------------------------------------------

### ```boundary_points```

**Description:** Returns the boundary lattice points of the polytope.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```boundary_points_not_interior_to_facets```

**Description:** Returns the boundary lattice points not interior to facets.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```chi```

**Description:** Returns the Euler characteristic of the Calabi-Yau obtained as the
anticanonical hypersurface in the toric variety given by a
desingularization of the normal fan of the polytope.

:::note
Only 4D polytopes are currently supported. An exception is raised if it is not a 4D reflexive
polytope.
:::

:::important
The Euler characteristic of the Calabi-Yaus that are obtained by
triangulating this polytope will differ by a sign.  This is because the
convention that KS uses is so that the Hodge numbers are from the
hypersurface on the varieties obtained from desingularizing the normal fan of
the polytope, instead its face fan.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```dim```

**Description:** Returns the dimension of the polytope.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```dual```

**Description:** Returns the dual polytope (also called polar polytope).  Only lattice
polytopes are currently supported, so only duals of reflexive polytopes
can be computed.

:::note
If $L$ is a lattice polytope, the dual polytope of $L$ is
$ConvexHull(\{y\in \mathbb{Z}^n | x\cdot y \geq -1\text{ for all }x\in L\})$.
A lattice polytope is reflexive if its dual is also a lattice polytope.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```faces```

**Description:** Computes the faces of a polytope.

:::note
When the polytope is 4-dimensional it calls the slightly more optimized [_faces4d()](#_faces4d) function.
:::

**Arguments:**

- ```d``` (integer, optional): Optional parameter that specifies the
    dimension of the desired faces.

**Returns:** A list of [```PolytopeFace```](./polytopeface) objects of dimension d, if
specified. Otherwise it is a list of lists of
[```PolytopeFace```](./polytopeface) objects organized in increasing dimension.

**Example:** We show that [```faces```](#faces) returns a list of 2-faces if ```d``` is set to 2. Otherwise, the function returns all faces in lists organized by dimension
```python {3,4}
from cyt import Polytope
p = Polytope([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[-1,-1,-1,-1]])
faces2d = p.faces(2)
allfaces = p.faces()
faces2d[0].vertices().tolist() == allfaces[2][0].vertices().tolist()
# Prints: True
```

-------------------------------------------------------------------------------

### ```facets```

**Description:** Returns the facets (codimension-1 faces) of the polytope.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```glsm_charge_matrix```

**Description:** Compute the GLSM charge matrix of the theory resulting from this
polytope.

**Arguments:**
- ```use_origin``` (boolean, optional, default=False): Indicates whether to use
    the origin in the calculation.  This corresponds to the inclusion
    of the canonical divisor.
- ```use_all_points``` (boolean, optional, default=False): By default only
    boundary points not interior to facets are used. If this flag is
    set to true then points interior to facets are also used.
- ```integral_basis``` (boolean, optional, default=False): Indicates whether to
    try to find an integer basis for the columns of the GLSM charge
    matrix. (i.e. so that remaining columns can be written as an
    integer linear combination of the basis.)
- ```nonnegative``` (boolean, optional, default=False): Indicates whether to
    find a GLSM charge matrix with all of the entries being
    nonnegative. This is also referred to as a weight matrix.
- ```n_retries``` (int, optional, default=100): Flint sometimes fails to find
    the kernel of a matrix. This flag specifies the number of times the
    points will be suffled and the computation retried.

**Returns:** A tuple containing the following three objects:
- The GLSM charge matrix.
- A list of indices specifying a basis of the columns of the
  GLSM charge matrix.
- A matrix of linear relations of the columns of the GLSM
  charge matrix.

-------------------------------------------------------------------------------

### ```h11```

**Description:** Returns the Hodge number h^{1,1} of the Calabi-Yau obtained as the
anticanonical hypersurface in the toric variety given by a
desingularization of the normal fan of the polytope.

:::note
Only 4D polytopes are currently supported. An exception is raised if it is not a 4D reflexive
polytope.
:::

:::important
The Hodge numbers of the Calabi-Yaus that are obtained by
triangulating this polytope will be interchanged.  This is because the
convention that KS uses is so that the Hodge numbers are from the
hypersurface on the varieties obtained from desingularizing the normal fan of
the polytope, instead its face fan.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```h21```

**Description:** Returns the Hodge number h^{2,1} of the Calabi-Yau obtained as the
anticanonical hypersurface in the toric variety given by a
desingularization of the normal fan of the polytope.

:::note
Only 4D polytopes are currently supported. An exception is raised if it is not a 4D reflexive
polytope.
:::

:::important
The Hodge numbers of the Calabi-Yaus that are obtained by
triangulating this polytope will be interchanged.  This is because the
convention that KS uses is so that the Hodge numbers are from the
hypersurface on the varieties obtained from desingularizing the normal fan of
the polytope, instead its face fan.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```interior_points```

**Description:** Returns the interior lattice points of the polytope.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```is_favorable```

**Description:** Returns True if the Calabi-Yau manifold arising from this polytope
is favorable (i.e. all Kahler forms descend from Kahler forms on the
ambient toric variety) and False otherwise.

:::note
Only 4D polytopes are currently supported. An exception is raised if it is not a 4D reflexive
polytope.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```is_full_dimensional```

**Description:** Returns True if the polytope is full-dimensional and False otherwise.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```is_reflexive```

**Description:** Returns True if the polytope is reflexive and False otherwise.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```normal_form```

**Description:** Returns the normal form of the polytope as defined by Kreuzer-Skarke.

**Arguments:**
- ```affine_transform``` (boolean, optional, default=False): Flag that
determines whether to only use GL(d,Z) transformations or also
allow translations. When set to True it allows the computation
of normal forms of polytopes that are not full-dimensional.

**Returns:** The list of vertices in normal form.

-------------------------------------------------------------------------------

### ```points```

**Description:** Returns the lattice points of the polytope.

:::note
Points are sorted so that interior points are first, and then the rest
are arranged by decreasing number of saturated inequalities.
For reflexive polytopes this is useful since the origin will be at
index 0 and boundary points not interior to facets will be last.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```points_interior_to_facets```

**Description:** Returns the lattice points interior to facets.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```points_not_interior_to_facets```

**Description:** Returns the lattice points not interior to facets.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```points_to_indices```

**Description:** Returns the list of indices corresponding to the given points.

**Arguments:**
- ```pts``` (list): A list of points.

-------------------------------------------------------------------------------

### ```polar```

**Description:** Alias for [```dual```](#dual).  See [```dual```](#dual) function for details.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```triangulate```

**Description:** Returns a single regular triangulation of the polytope.

:::note
When reflexive polytopes are used it defaults to returning a random
fine, regular, star triangulation.
:::

**Arguments:**
- ```heights``` (list, optional): A list of heights specifying the regular
    triangulation.  When not secified, it will return the Delaunay
    triangulation when using CGAL, a triangulation obtained from
    random heights near the Delaunay when using QHull, or the
    placing triangulation when using TOPCOM.  Heights can only be
    specified when using CGAL or QHull as the backend.
- ```make_star``` (boolean, optional): Indicates whether to turn the
    triangulation into a star triangulation by delering internal
    lines and connecting all points to the origin.  If not
    specified, this is done only for reflexive polytopes.
- ```only_pts``` (list or string, optional): A list of the indices of the
    points to be included in the triangulation.  If not specified,
    it uses points not interior to facets when the polytope is
    reflexive, and all of them otherwise.  When it is desired to
    force the inclusion of all points, it can be set to "all".
- ```simplices``` (list, optional): A list of simplices specifying the
    triangulation.  This is useful when a triangulation was
    previously computed and it needs to be inputted again.  Note
    that the order of the points needs to be consistent.
- ```backend``` (string, optional, default=qhull): Specifies the backend
    used to compute the triangulation.  The available options are
    "qhull", "cgal", and "topcom".  QHull is the default one as it
    is included in scipy, but it has some problems when there is
    degeneracy with the heights and when polytopes are too large.
    CGAL is far better in general, but it requires additional
    software to be installed.
- ```backend_path``` (string, optional): This can be used to specify the
    location of CGAL or TOPCOM binaries when they are not in PATH.

**Returns:** A [```Triangulation```](./triangulation) object describing a
triangulation of the polytope.

**Example:** We construct a triangulation of a reflexive polytope and check that
by default it is a fine, regular, star triangulation.
```python {3}
from cyt import Polytope
p = Polytope([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[-1,-1,-1,-1]])
t = p.triangulate()
t
# Prints: A fine, star triangulation of a 4-dimensional polytope in ZZ^4
t.is_regular()
# Prints: True
t
# Prints: A fine, regular, star triangulation of a 4-dimensional polytope in ZZ^4
```

-------------------------------------------------------------------------------

### ```vertices```

**Description:** Returns the vertices of the polytope.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```volume```

**Description:** Returns the volume of the polytope.

:::important
By convention, the standard simplex has unit volume. To get the more typical Euclidean volume
it must be multiplied by $d!$.
:::

**Arguments:** None.

-------------------------------------------------------------------------------



## Hidden Functions

### ```__init__```

**Description:** Constructs the ```Polytope``` object. See [```cyt.polytope.Polytope```](#cytpolytopepolytope) for more details.

**Arguments:**
- ```points``` (list): A list of points. The polytope is defined by their convex hull.
- ```backend``` (string, optional): A string that specifies the backend used to construct the convex hull.  The available options are "ppl" or "qhull".  When not specified, it uses PPL if available and QHull otherwise.

-------------------------------------------------------------------------------

### ```__repr__```

**Description:** Returns a string describing the polytope.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```_faces4d```

**Description:** Computes the faces of a 4D polytope.

:::note
This function is a slightly more optimized version of the [faces](#faces)
function present in this class.  Typically the user should not call
this function directly.  Instead, it is only called by [faces](#faces) when the
polytope is 4-dimensional.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```_points_saturated```

**Description:** Computes the lattice points of the polytope along with the indices of
the hyperplane inequalities that they saturate.

:::note notes
- Points are sorted so that interior points are first, and then the rest
are arranged by decreasing number of saturated inequalities.
For reflexive polytopes this is useful since the origin will be at
index 0 and boundary points not interior to facets will be last.

- Typically this function should not be called by the user. Instead, it
is called by various other functions in the polytope class.
:::

**Arguments:** None.

**Returns:** A list of tuples. For each tuple, the first component is the coordinates of the point and the second a ```frozenset``` of the hyperplane inequalities that are saturated.
