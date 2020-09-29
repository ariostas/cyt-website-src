---
id: cone
title: Cone Class
---

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
  integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
  crossOrigin="anonymous"
/>

This class handles all computations relating to rational polyhedral cones, such as rays and cone duality. It is mainly used for the study of Kahler and Mori cones.

## Constructor

### ```cyt.cone.Cone```

**Description:** Constructs a ```Cone``` object. This is handled by the hidden [```__init__```](#__init__) function.

**Arguments:**
- ```rays``` (list, optional): A list of rays that generates the cone.  If
  it is not specified then the hyperplane normals must be
  specified.
- ```hyperplanes``` (list, optional): A list of inward hyperplane normals
  that define the cone.  If it is not specified then the
  generating rays must be specified.
- ```check``` (boolean, optional): Whether to check the input. Recommended
  if constructing a cone directly.

:::note
Exactly one of ```rays``` or ```hyperplanes``` must be specified. Otherwise an
exception is raised.
:::

-------------------------------------------------------------------------------

## Functions

### ```dmin```

**Description:** Finds the tip of the stretched cone via quadratic programming.

**Arguments:**
- ```c``` (float): A real positive number specifying the stretching of the
  cone.
- ```backend``` (string, optional): String that specifies the optimized to
  use. If not specified, it tries using all optimizers.
- ```checks``` (boolean, optional, default=True): Flag that specifies
  whether to check if the output of the optimizer is correct.

**Arguments:** A tuple containing the distance to the tip of the stretched
  cone (dmin), as well as the vector specifying the location.

-------------------------------------------------------------------------------

### ```dual```

**Description:** Returns the dual cone.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```extremal_rays```

**Description:** Returns the extremal rays of the polytope.

**Arguments:**
- ```tol``` (float, optional, default=1e-5): Optional parameter specifying
  the allowed rounding error.

-------------------------------------------------------------------------------

### ```hyperplanes```

**Description:** Returns the inward normals to the hyperplanes that define the cone.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```is_solid```

**Description:** Returns True if the cone is solid, i.e. if it is full-dimensional.

:::note
If the generating rays are known then this can simply be checked by
computing the dimension of the linear space that they span.  However,
when only the hyperplane inequalities are known this can be a difficult
problem.  There are three available backends for this computation.  PPL
explicitly constructs the convex hull defined by the inequalities and
thus only works for low dimensions.  ORTools and Mosek work by solving
an optimization problem and work even at high dimensions.
:::

**Arguments:**
- ```backend``` (string, optional, default="ortools"): Specifies which
  backend to use. Available options are "ppl", "ortools", and
  "mosek".
- ```c``` (float, optional, default=0.01): A number used to create a
  "stretched cone" and try to find the tip. This is used for all
  backends except for PPL.

-------------------------------------------------------------------------------

### ```rays```

**Description:** Returns the (not necessarily extremal) rays that generate the cone.

**Arguments:** None.

-------------------------------------------------------------------------------



## Hidden Functions

### ```__init__```

**Description:** Constructs the ```Cone``` object. See [```cyt.cone.Cone```](#cytconecone) for more details.

**Arguments:**
- ```rays``` (list, optional): A list of rays that generates the cone.  If
  it is not specified then the hyperplane normals must be
  specified.
- ```hyperplanes``` (list, optional): A list of inward hyperplane normals
  that define the cone.  If it is not specified then the
  generating rays must be specified.
- ```check``` (boolean, optional): Whether to check the input. Recommended
  if constructing a cone directly.

-------------------------------------------------------------------------------

### ```__repr__```

**Description:** Returns a string describing the cone.

**Arguments:** None.
