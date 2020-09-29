---
id: other
title: Miscellaneous Functions
sidebar_label: Misc Functions
---

## Functions in ```cyt.triangulation```

### ```all_triangulations```

**Description:** Computes all triangularions of the inputted point configuration using
  TOPCOM.  There is the option to only compute regular or fine
  triangulations.

**Arguments:**
- ```only_regular``` (boolean, optional, default=True): Whether to restrict to
  regular triangulations.
- ```only_fine``` (boolean, optional, default=True): Whether to restrict to
  fine triangulations.

**Returns:** A list of all triangulations of the polytope.

-------------------------------------------------------------------------------

### ```cgal_triangulate```

**Description:** Computes a regular triangulation using CGAL.

**Arguments:**
- ```points``` (list): List of points with an extra coordinate set to 1.
- ```heights``` (list): The list of heights specifying the regular triangulation.
- ```cgal_dir``` (string, optional): The directory of the CGAL binaries
  installation in case the binaries are not in PATH.

**Returns:** The list of simplices of the triangulation.

-------------------------------------------------------------------------------

### ```convert_to_star```

**Description:** Turns a triangulation into a star triangulation by deleting internal lines
  and connecting all points to the origin.

:::caution
This is only reliable for reflexive polytopes and may produce invalid tiangulations for other polytopes.
:::

**Arguments:**
- ```simplices``` (list): List of simplices of the triangulation. Each simplex
  consists of the indices of the points forming its vertices.
- ```facets``` (iterable): The list of facets of the polytope. Each facet
  consists of the indices of the points in the facet.
- ```star_origin``` (integer): The index of the point that is used as the star
  origin.

**Returns:** The list of simplices of the triangulation.

-------------------------------------------------------------------------------

### ```topcom_triangulate```

**Description:** Computes a regular triangulation using TOPCOM.

**Arguments:**
- ```points``` (list): List of points with an extra coordinate set to 1.
- ```topcom_dir``` (string, optional): The directory of the TOPCOM
  installation in case the binaries are not in PATH.

**Returns:** The list of simplices of the triangulation.

-------------------------------------------------------------------------------

### ```qhull_triangulate```

**Description:** Computes a regular triangulation using QHull.

**Arguments:**
- ```points``` (list): List of points with an extra coordinate set to 1.
- ```heights``` (list): The list of heights specifying the regular triangulation.

**Returns:** The list of simplices of the triangulation.

-------------------------------------------------------------------------------



## Functions in ```cyt.utils```

### ```filter_tensor_indices```

**Description:** Selects a specific subset of indices from a tensor.  The tensor is
reindexed so that indices are in the range 0..len(indices) with the
ordering specified by the input indices.

:::note
This function can be used to convert the tensor of triple intersection
  numbers to a given basis.
:::

**Arguments:**
- ```tensor``` (list): A list describing a n-tensor. Each element of the list
  is a list of length n+1, with the first n elements being indices
  and the last entry being the value at the corresponding position.
- ```indices``` (list): The list of indices that will be preserved.

**Returns:** A matrix describing a tensor in the same format as the input,
  but only with the desired indices.

-------------------------------------------------------------------------------

### ```gcd_float```

**Description:** Compute the greatest common (floating point) divisor of a and b.

**Arguments:**
- ```a``` (float): The first number.
- ```b``` (float): The second number.
- ```tol``` (float, optional, default=1e-5): The tolerance for rounding.

**Returns:** The gcd of a and b.

-------------------------------------------------------------------------------

### ```gcd_list```

**Description:** Compute the greatest common divisor of the elements in a list.

**Arguments:**
- ```arr``` (list): A list of floating point numbers.

**Returns:** The gcd of all the elements in the input list.

-------------------------------------------------------------------------------

### ```solve_linear_system```

**Description:** Solves the sparse linear system M*x=C.

**Arguments:**
- ```M``` (dok_matrix): A scipy dok_matrix.
- ```C``` (list): A vector of floats.
- ```solver``` (string, optional, default="all"): The sparse linear solver to
  use. Options are "all", "sksparse" and "scipy".
- ```check``` (boolean, optional, default=True): Whether to explicitly check
  the solution to the linear system.
- ```solver_error_tol``` (float, optional, default=1e-4): Error tolerance for
  the solution of the linear system.
- ```verbose``` (int, optional, default=0): Verbosity level:
  - verbose = 0: Do not print anything.
  - verbose = 1: Print warnings when solvers fail.

**Returns:** Floating point solution to the linear system.

-------------------------------------------------------------------------------

### ```to_sparse```

**Description:** Converts an matrix of the form [[a,b, M_ab]] to a dok_matrix.

**Arguments:**
- ```rule_arr_in``` (list): A matrix in the form [[a,b, M_ab]].

**Returns:** A dok_matrix.
