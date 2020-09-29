---
id: triangulation
title: Triangulation Class
---

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
  integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
  crossOrigin="anonymous"
/>

This class handles triangulations of lattice polytopes. It can analyze various aspects of the triangulation, as well as construct a CalabiYau object if the triangulation is suitable.

:::important
Generally, objects of this class should not be constructed directly by the user.
Instead, they should be created by the [triangulate](./polytope#triangulate) function of the [Polytope](./polytope) class, or other [miscellaneous functions](./other).
:::

## Constructor

### ```cyt.triangulation.Triangulation```

**Description:** Constructs a ```Triangulation``` object describing a triangulation of a lattice polytope. This is handled by the hidden [```__init__```](#__init__) function.

:::note
Some checks on the input are always performed, as it is
nesessary to have all the data organized properly so that the results
obtained with the Calabi-Yau class are correct. In particular, the
ordering of the points needs to be consistent with what the Polytope
class returns. For this reason, this function first attempts to fix
discrepancies, and if it fails then it disallows the creation of a
Calabi-Yau object.
:::

**Arguments:**
- ```triang_pts``` (list): The list of points to be triangulated.
- ```poly``` (Polytope, optional): The ambient polytope on which the points
    sit.  If not specified, it is constructed as the convex hull
    of the given points.
- ```heights``` (list, optional): A list of heights specifying the regular
    triangulation.  When not secified, it will return the Delaunay
    triangulation when using CGAL, a triangulation obtained from
    random heights near the Delaunay when using QHull, or the
    placing triangulation when using TOPCOM.  Heights can only be
    specified when using CGAL or QHull as the backend.
- ```make_star``` (boolean, optional, default=False): Indicates whether to
    turn the triangulation into a star triangulation by delering
    internal lines and connecting all points to the origin.
- ```exclude_pts``` (list, optional): A list of points to be excluded in
    the triangulation.  If not specified, it excludes points
    interior to facets when the polytope is reflexive.  When it is
    desired to include all points an empty list should be given.
- ```simplices``` (list, optional): A list of simplices specifying the
    triangulation.  Each simplex is a list of point indices. This
    is useful when a triangulation was previously computed and it
    needs to be inputted again.  Note that the ordering of the
    points needs to be consistent.
- ```backend``` (string, optional, default="qhull"): Specifies the backend
    used to compute the triangulation.  The available options are
    "qhull", "cgal", and "topcom".  QHull is the default one as it
    is included in scipy, but it has some problems when there is
    degeneracy with the heights and when polytopes are too large.
    CGAL is far better in general, but it requires additional
    software to be installed.
- ```backend_path``` (string, optional): This can be used to specify the
    location of CGAL or TOPCOM binaries when they are not in PATH.

-------------------------------------------------------------------------------

## Functions

### ```cpl_cone```

**Description:** Compute the cone of strictly convex piecewise linear functions
defining the triangulation.  It is computed by finding the defining
hyperplane equations.
:::note
The triangularion is regular if and only if this
cone is solid (i.e. full-dimensional).
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```dim```

**Description:** Returns the dimension of the point configuration.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```get_cy```

**Description:** Returns a CalabiYau object corresponding to the anti-canonical
hypersurface on the toric variety defined by the fine, star, regular
triangulation.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```gkz_phi```

**Description:** Returns the GKZ phi vector of the triangulation.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```is_fine```

**Description:** Returns True if the triangulation is fine (i.e. all the points are used)
and False otherwise.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```is_regular```

**Description:** Returns True if the triangulation is regular and False otherwise.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```is_star```

**Description:** Returns True if the triangulation is star.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```is_valid```

**Description:** Returns True if the presumed triangulation meets all requirements to be
a triangularion.  The simplices must cover the full volume of the
convex hull, and they cannot intersect at full-dimensional regions.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```neighbor_triangs```

**Description:** Returns triangulations that differ by one bistellar flip.

**Arguments:**
- ```only_regular``` (boolean, optional, default=True): Whether to restrict
  to only regular triangulations.
- ```topcom_dir``` (string, optional): The directory of the TOPCOM
  installation in case the binaries are not in PATH.

-------------------------------------------------------------------------------

### ```points```

**Description:** Returns the points of the triangulation.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```points_to_indices```

**Description:** Returns the list of indices corresponding to the given points.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```random_flips```

**Description:** Returns a list of triangulations obtained after performing N random
bistellar flips.

**Arguments:**
- ```N``` (int): The number of flips to perform.
- ```only_regular``` (boolean, optional, default=True): Whether to restrict
    to only regular triangulations.
- ```topcom_dir``` (string, optional): The directory of the TOPCOM
    installation in case the binaries are not in PATH.

-------------------------------------------------------------------------------

### ```simplices```

**Description:** Returns the simplices of the triangulation.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```sr_ideal```

**Description:** Returns the Stanley–Reisner ideal if the triangularion is star.

**Arguments:** None.

-------------------------------------------------------------------------------



## Hidden Functions

### ```__init__```

**Description:** Constructs the ```Triangulation``` object. See [```cyt.triangulation.Triangulation```](#cyttriangulationtriangulation) for more details.

**Arguments:**
- ```triang_pts``` (list): The list of points to be triangulated.
- ```poly``` (Polytope, optional): The ambient polytope on which the points
    sit.  If not specified, it is constructed as the convex hull
    of the given points.
- ```heights``` (list, optional): A list of heights specifying the regular
    triangulation.  When not secified, it will return the Delaunay
    triangulation when using CGAL, a triangulation obtained from
    random heights near the Delaunay when using QHull, or the
    placing triangulation when using TOPCOM.  Heights can only be
    specified when using CGAL or QHull as the backend.
- ```make_star``` (boolean, optional, default=False): Indicates whether to
    turn the triangulation into a star triangulation by delering
    internal lines and connecting all points to the origin.
- ```exclude_pts``` (list, optional): A list of points to be excluded in
    the triangulation.  If not specified, it excludes points
    interior to facets when the polytope is reflexive.  When it is
    desired to include all points an empty list should be given.
- ```simplices``` (list, optional): A list of simplices specifying the
    triangulation.  Each simplex is a list of point indices. This
    is useful when a triangulation was previously computed and it
    needs to be inputted again.  Note that the ordering of the
    points needs to be consistent.
- ```backend``` (string, optional, default="qhull"): Specifies the backend
    used to compute the triangulation.  The available options are
    "qhull", "cgal", and "topcom".  QHull is the default one as it
    is included in scipy, but it has some problems when there is
    degeneracy with the heights and when polytopes are too large.
    CGAL is far better in general, but it requires additional
    software to be installed.
- ```backend_path``` (string, optional): This can be used to specify the
    location of CGAL or TOPCOM binaries when they are not in PATH.

-------------------------------------------------------------------------------

### ```__repr__```

**Description:** Returns a string describing the triangulation.

**Arguments:** None.
