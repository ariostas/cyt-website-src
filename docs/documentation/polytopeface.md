---
id: polytopeface
title: PolytopeFace Class
---

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
  integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
  crossOrigin="anonymous"
/>

This class handles all computations relating to faces of lattice polytopes.

:::important
Generally, objects of this class should not be constructed directly by the user.
Instead, they should be created by the [faces](./polytope#faces) function of the [Polytope](./polytope) class.
:::

## Constructor

### ```cyt.polytope.PolytopeFace```

**Description:** Constructs a ```PolytopeFace``` object describing a face of a lattice polytope. This is handled by the hidden [```__init__```](#__init__) function.

**Arguments:**
- ```ambient_poly``` (Polytope): The ambient polytope.
- ```vertices``` (list): The list of vertices.
- ```saturated_ineqs``` (frozenset): A frozenset containing the indices of
    the inequalities that this face saturates.
- ```dim``` (int, optional): The dimension of the face. If it is not given then it is
    computed.

-------------------------------------------------------------------------------

## Functions


### ```ambient_dim```

**Description:** Returns the dimension of the ambient lattice.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```ambient_polytope```

**Description:** Returns the ambient polytope of the face.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```boundary_points```

**Description:** Returns the boundary lattice points of the face.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```dim```

**Description:** Returns the dimension of the face.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```dual```

**Description:** Returns the dual face as a ```PolytopeFace``` object.

:::note
Duality is only implemented for reflexive polytopes. An exception is raised if
the polytope is not reflexive.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```faces```

**Description:** Computes the faces of the face.

**Arguments:** None.

**Returns:** A list of lists of ```PolytopeFace``` objects organized in
increasing dimension.

-------------------------------------------------------------------------------

### ```interior_points```

**Description:** Returns the interior lattice points of the face.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```points```

**Description:** Returns the lattice points of the polytope.

:::note
Points are sorted in the same way as for the [points](./polytope#points) function of the [Polytope](./polytope) class.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```polytope```

**Description:** Returns the face as a [```Polytope```](./polytope) object.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```vertices```

**Description:** Returns the vertices of the face.

**Arguments:** None.

-------------------------------------------------------------------------------



## Hidden Functions

### ```__init__```

**Description:** Constructs the ```PolytopeFace``` object. See [```cyt.polytope.PolytopeFace```](#cytpolytopepolytopeface) for more details.

**Arguments:**
- ```ambient_poly``` (Polytope): The ambient polytope.
- ```vertices``` (list): The list of vertices.
- ```saturated_ineqs``` (frozenset): A frozenset containing the indices of
    the inequalities that this face saturates.
- ```dim``` (int, optional): The dimension of the face. If it is not given then it is
    computed.

-------------------------------------------------------------------------------

### ```__repr__```

**Description:** Returns a string describing the face.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```_points_saturated```

**Description:** Computes the lattice points of the face along with the indices of
the hyperplane inequalities that they saturate.

:::note notes
- Points are sorted in the same way as for the [_points_saturated](./polytope#_points_saturated) function of the [Polytope](./polytope) class.

- Typically this function should not be called by the user. Instead, it
is called by various other functions in the PolytopeFace class.
:::

**Arguments:** None.

**Returns:** A list of tuples. For each tuple, the first component is the coordinates of the point and the second a ```frozenset``` of the hyperplane inequalities that are saturated.
