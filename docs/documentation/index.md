---
id: overview
title: Overview
slug: /documentation/
---


CYT provides five main python classes containing various functions specific to the object they describe. These classes are the following:

* [```Polytope```](./polytope) This class handles all computations relating to lattice polytopes, such as the computation of lattice points and faces. It also allows the computation of topological data of the Calabi-Yau that only depends on the reflexive polytope.

* [```PolytopeFace```](./polytopeface) This class handles all computations relating faces of lattice polytopes.

* [```Triangulation```](./triangulation) This class handles triangulations of lattice polytopes. It can analyze various aspects of the triangulation, as well as construct a CalabiYau object if the triangulation is suitable.

* [```CalabiYau```](./calabiyau) This class handles various computations relating to the CalabiYau itself. It can be used to compute intersection numbers, the Kahler cone of the ambient variety, among other things.

* [```Cone```](./cone) This class handles all computations relating to rational polyhedral cones, such as rays and cone duality. It is mainly used for the study of Kahler and Mori cones.

Apart from the above classes there are other miscellaneous functions that we document in [```other Functions```](./other).

CYT is open-source software distributed under the GPU GPL3 license. See [licensing](./license) for more details.
