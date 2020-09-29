---
id: calabiyau
title: CalabiYau Class
---

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
  integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
  crossOrigin="anonymous"
/>

This class handles various computations relating to the CalabiYau itself. It can be used to compute intersection numbers, the Kahler cone of the ambient variety, among other things.

:::important
Generally, objects of this class should not be constructed directly by the user.
Instead, they should be created by the [get_cy](./triangulation#get_cy) function of the [Triangulation](./triangulation) class.
:::

## Constructor

### ```cyt.calabiyau.CalabiYau```

**Description:** Constructs a ```CalabiYau``` object. This is handled by the hidden [```__init__```](#__init__) function.

**Arguments:**
- ```frst``` (Triangulation): A fine, regular, star triangularion of a
reflexive polytope.

-------------------------------------------------------------------------------

## Functions

### ```ambient_dim```

**Description:** Returns the complex dimension of the ambient toric variety.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```ambient_intersection_numbers```

**Description:** Returns the intersection numbers of the ambient toric variety.

:::note notes
- The intersection numbers are computed as floating point numbers,
not rationals.  This does not make a difference when the
intersection numbers are integers.
- This function currently only supports 4D toric varieties.
:::

**Arguments:**
- ```in_basis``` (boolean, optional, default=True): Whether to only return
  the intersection numbers of a basis of divisors.
- ```solver``` (string, optional, default="all"): The sparse linear solver
  to use.  Options are "all", "sksparse" and "scipy".  When set
  to "all" every solver is tried in order until one succeeds.
- ```check``` (boolean, optional, default=True): Whether to explicitly
  check the solution to the linear system.
- ```solver_error_tol``` (float, optional, default=1e-4): Error tolerance
  for the solution of the linear system.
- ```round_to_zero_treshold``` (float, optional, default=1e-4):
  Intersection numbers with magnitude smaller than this treshold
  are rounded to zero.
- ```verbose``` (int, optional, default=0): Verbosity level:
  - verbose = 0: Do not print anything.
  - verbose = 1: Print linear solver warnings.

**Returns:** A matrix containing nonzero intersection numbers, in the
format: [[A,B,C,D,Kappa_ABCD], ...], where A,B,C,D are indices
of divisors and Kappa_ABCD is the intersection number.

-------------------------------------------------------------------------------

### ```chi```

**Description:** Returns the Euler characteristic of the Calabi-Yau.

:::note
Only 3-folds are currently supported. An exception is raised if it is not a 3-fold.
:::

:::important
The Euler characteristic differs by a sign for the Calabi-Yau and
the polytope. This is because the convention that KS uses is to use the
Hodge numbers from the hypersurface on the desingularized normal fan of
the polytope, whereas here we use the desingularized face fan.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```compute_AA```

**Description:** Takes Kahler parameters as input and calculates the matrix
kappa^ijk*t_k.

**Arguments:**
- ```tloc``` (list): Vector specifying the Kahler parameters (i.e. a location in the Kahler cone).

-------------------------------------------------------------------------------

### ```compute_cy_volume```

**Description:** Takes Kahler parameters as input and calculates the volume of the CY.

**Arguments:**
- ```tloc``` (list): Vector specifying the Kahler parameters (i.e. a location in the Kahler cone).

-------------------------------------------------------------------------------

### ```compute_divisor_volumes```

**Description:** Takes Kahler parameters as input and calculates volumes of the basis
4-cycles.

**Arguments:**
- ```tloc``` (list): Vector specifying the Kahler parameters (i.e. a location in the Kahler cone).

-------------------------------------------------------------------------------

### ```compute_Kinv```

**Description:** Takes Kahler parameters as input and calculates the inverse Kahler
metric.

**Arguments:**
- ```tloc``` (list): Vector specifying the Kahler parameters (i.e. a location in the Kahler cone).

-------------------------------------------------------------------------------

### ```dim```

**Description:** Returns the complex dimension of the Calabi-Yau hypersurface.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```glsm_charge_matrix```

**Description:** Compute the GLSM charge matrix of the theory resulting from this
polytope.

**Arguments:**
- ```use_origin``` (boolean, optional, default=False): Indicates whether to use
    the origin in the calculation.  This corresponds to the inclusion
    of the canonical divisor.
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

**Description:** Returns the Hodge number h^{1,1} of the Calabi-Yau.

:::note
Only 3-folds are currently supported. An exception is raised if it is not a 3-fold.
:::

:::important
The Hodge numbers of the Calabi-Yau and the polytope that was
triangulated are interchanged.  This is because the
convention that KS uses is so that the Hodge numbers are from the
hypersurface on the varieties obtained from desingularizing the normal fan of
the polytope, instead its face fan.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```h21```

**Description:** Returns the Hodge number h^{2,1} of the Calabi-Yau.

:::note
Only 3-folds are currently supported. An exception is raised if it is not a 3-fold.
:::

:::important
The Hodge numbers of the Calabi-Yau and the polytope that was
triangulated are interchanged.  This is because the
convention that KS uses is so that the Hodge numbers are from the
hypersurface on the varieties obtained from desingularizing the normal fan of
the polytope, instead its face fan.
:::

**Arguments:** None.

-------------------------------------------------------------------------------

### ```intersection_numbers```

**Description:** Calculates the intersection numbers of the (smooth) CY hypersurface.

:::note
The intersection numbers are computed as floating point numbers, not
rationals.  Only 3-folds are currently supported.
:::

:::caution
If the CY hypersurface is not smooth, the results cannot be
trusted.
:::

**Arguments:**
- ```in_basis``` (boolean, optional, default=True): Whether to only return
  the intersection numbers of a basis of divisors.
- ```use_origin``` (boolean, optional, default=True): Whether to compute
  the intersection numbers of the Calabi-Yau hypersurface.  They
  correspond to the index 0 if set to True.
- ```solver``` (string, optional, default="all"): The sparse linear solver
  to use.  Options are "all", "sksparse" and "scipy".  When set
  to "all" every solver is tried in order until one succeeds.
- ```check``` (boolean, optional, default=True): Whether to explicitly
  check the solution to the linear system.
- ```solver_error_tol``` (float, optional, default=1e-4): Error tolerance
  for the solution of the linear system.
- ```round_to_zero_treshold``` (float, optional, default=1e-4):
  Intersection numbers with magnitude smaller than this treshold
  are rounded to zero.
- ```round_to_integer_error_tol``` (float, optional, default=1e-4): All
  intersection numbers must be integers up to errors less than
  this value. Otherwise, an Exception is raised.
- ```verbose``` (int, optional, default=0): Verbosity level:
  - verbose = 0: Do not print anything.
  - verbose = 1: Print linear solver warnings.

**Returns:** A matrix containing nonzero intersection numbers, in the
format: [[A,B,C,Kappa_ABC], ...], where A,B,C are indices of
divisors and Kappa_ABCD is the intersection number.

-------------------------------------------------------------------------------

### ```kahler_cone```

**Description:** Returns the Kahler cone of the ambient toric variety.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```mori_cone```

**Description:** Returns the Mori cone of the ambient toric variety.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```sr_ideal```

**Description:** Returns the Hodge number h^{2,1} of the Calabi-Yau.

**Arguments:** None.

-------------------------------------------------------------------------------



## Hidden Functions

### ```__init__```

**Description:** Constructs the ```CalabiYau``` object. See [```cyt.calabiyau.CalabiYau```](#cytcalabiyaucalabiyau) for more details.

**Arguments:**
- ```frst``` (Triangulation): A fine, regular, star triangularion of a
reflexive polytope.

-------------------------------------------------------------------------------

### ```__repr__```

**Description:** Returns a string describing the Calabi-Yau hypersurface.

**Arguments:** None.

-------------------------------------------------------------------------------

### ```_compute_mori_rays_from_ambient_intersections```

**Description:** Computes the Mori cone rays of the ambient variety using intersection
numbers.

:::note notes
- This function should generally not be called by the user.
Instead, this is called by the [mori_cone](#mori_cone) function when it detects
that ambient intersection numbers were already computed so as to save
some time.

- This function currently only supports CY 3-folds.
:::

**Arguments:** None.
