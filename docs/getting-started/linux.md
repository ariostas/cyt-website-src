---
id: linux
title: Linux
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Installation of CYT on Linux can be done in different ways, which have differing sets of features. The recommended method is by either building or downloading the Docker image, which includes the full set of features of the package. Alternatively, there is the option of only installing the Python package via pip, which only contains the most basic tools. The remaining features require the manual installation of other open-source packages, which can be time-consuming.

## Requirements

<Tabs
  groupId="install-method"
  defaultValue="ddocker"
  values={[
    {label: 'Download Docker image', value: 'ddocker'},
    {label: 'Build Docker image', value: 'bdocker'},
    {label: 'Only Python package', value: 'python'}
  ]}>
  <TabItem value="ddocker">
When downloading the Docker image, the only requirement is almost any Linux distro running on a modern x86_64 processor.
  </TabItem>
  <TabItem value="bdocker">
When building the Docker image, the only requirement is almost any Linux distro running on a modern x86_64 processor.
  </TabItem>
  <TabItem value="python">
When installing only the Python package, the only requirement is Python (version 3.6 or later) running on almost any x86_64 Linux distro.
  </TabItem>
</Tabs>

## Installation instructions

:::tip
For most users we recommend downloading the Docker image **without** MOSEK. [MOSEK](https://www.mosek.com/) is an optimizer that is greatly superior to open-source optimizers, but it unnecessary when studying only a moderate number of Calabi-Yaus. However, when large scans need to be performed, then we recommend building the Docker image with MOSEK. A license is required to use MOSEK. An academic license can be requested for free at [this link](https://www.mosek.com/products/academic-licenses/).
:::

:::note
Depending on your Docker installation it might be required to use ```sudo``` to run the Docker commands.
:::

<Tabs
  groupId="install-method"
  defaultValue="ddocker"
  values={[
    {label: 'Download Docker image', value: 'ddocker'},
    {label: 'Build Docker image', value: 'bdocker'},
    {label: 'Only Python package', value: 'python'}
  ]}>
  <TabItem value="ddocker">

  <Tabs
    groupId="mosek"
    defaultValue="without"
    values={[
      {label: 'Without MOSEK', value: 'without'},
      {label: 'With MOSEK', value: 'with'}
    ]}>
    <TabItem value="without">
      <ol>
      <li> Install Docker Engine, if not already installed. Installation instructions can be found <a href="https://docs.docker.com/engine/install/">here</a>.</li>
      <li> Download the Docker image. This can be done with <code>docker pull ariostas/cyt</code>.</li>
      <li>Create a shorter tag for the Docker image. This step is only for convenience. This can be done with <code>docker tag ariostas/cyt cyt</code></li>
      </ol>
    </TabItem>
    <TabItem value="with">
      <ol>
      <li> Install Docker Engine, if not already installed. Installation instructions can be found <a href="https://docs.docker.com/engine/install/">here</a>.</li>
      <li> Download the Docker image. This can be done with <code>docker pull ariostas/cyt</code>. Note: You might need to use <code>sudo</code> to run it.</li>
      <li> Create a new container using <code>docker run -it --name=cyt_mosek ariostas/cyt bash</code>.</li>
      <li> Once inside the container run <code>nano /cytools-install/external/mosek/mosek.lic</code> to create a license file in the right location.</li>
      <li> Paste the contents of your license file (Ctrl+Shift+v), save (Ctrl+s), and exit (Ctrl+x).</li>
      <li> Now exit the container with (Ctrl+d), or by running <code>exit</code>.</li>
      <li> Save the container as a new Docker image with <code>docker commit cyt_mosek cyt</code>.</li>
      <li> Remove the old container with <code>docker rm cyt_mosek</code>.</li>
      </ol>
    </TabItem>
  </Tabs>



  </TabItem>
  <TabItem value="bdocker">

  <Tabs
    groupId="mosek"
    defaultValue="without"
    values={[
      {label: 'Without MOSEK', value: 'without'},
      {label: 'With MOSEK', value: 'with'}
    ]}>
    <TabItem value="without">
      <ol>
      <li> Install Docker Engine, if not already installed. Installation instructions can be found <a href="https://docs.docker.com/engine/install/">here</a>.</li>
      <li> Clone the <a href="https://github.com/ariostas/cyt">CYT GitHub repository</a>. This can be done with <code>git clone https://github.com/ariostas/cyt.git</code> or simply by downloading the zipped repo and unzipping it.</li>
      <li>Build the Docker image. The Docker image can be built by first navigating to the root CYT folder on the terminal and then running <code>docker build -t cyt .</code> (note the period at the end).</li>
      </ol>
    </TabItem>
    <TabItem value="with">
      <ol>
      <li> Install Docker Engine, if not already installed. Installation instructions can be found <a href="https://docs.docker.com/engine/install/">here</a>.</li>
      <li> Clone the <a href="https://github.com/ariostas/cyt">CYT GitHub repository</a>. This can be done with <code>git clone https://github.com/ariostas/cyt.git</code> or simply by downloading the zipped repo and unzipping it.</li>
      <li>Activate Mosek. This is done by simply placing the license file in <code>cyt/external/mosek/mosek.lic</code>.</li>
      <li>Build the Docker image. The Docker image can be built by first navigating to the root CYT folder on the terminal and then running <code>docker build -t cyt .</code> (note the period at the end).</li>
      </ol>
    </TabItem>
  </Tabs>

  </TabItem>
  <TabItem value="python">

The Python package can be installing by running
```
pip install cyt
```
or by clonning the GitHub repository, navigating to the rood directory in the terminal, and running
```
python setup.py install
```
  </TabItem>
</Tabs>

## Usage

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
This will start a JupyterLab server. To access it, the shown URL of the form ```http://127.0.0.1:8888/?token=xxxxxxxxx``` should be copied and pasted into your browser of choice. From there all the usual JupyterLab functionality can be accessed and the full CYT package is available.

  </TabItem>
  <TabItem value="terminal">

```
docker run --rm -it -v ${PWD}:/home cyt python
```
This will directly start the Python interpreter, where cyt can be imported. Alternatively, one can launch a bash terminal in the image by replacing ```python``` with ```bash```, which can be useful sometimes.
  </TabItem>
</Tabs>
