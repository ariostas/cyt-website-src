---
id: windows
title: Windows
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Installation of CYT on macOS is done via a Docker image. There is the option of Downloading it from DockerHub or building it yourself.

## Requirements

The only requirement is a Windows installation capable of running Docker Desktop. In particular, it requires Windows 10: Pro, Enterprise, or Education (Version 1903 or later); or Windows 10: Home (Version 2004 or later) running on a modern x86_64 processor. See the [Docker installation guide](https://docs.docker.com/docker-for-windows/install/) for more details.

## Installation instructions

:::tip
For most users we recommend downloading the Docker image **without** MOSEK. [MOSEK](https://www.mosek.com/) is an optimizer that is greatly superior to open-source optimizers, but it unnecessary when studying only a moderate number of Calabi-Yaus. However, when large scans need to be performed, then we recommend building the Docker image with MOSEK. A license is required to use MOSEK. An academic license can be requested for free at [this link](https://www.mosek.com/products/academic-licenses/).
:::

<Tabs
  groupId="install-method"
  defaultValue="ddocker"
  values={[
    {label: 'Download Docker image', value: 'ddocker'},
    {label: 'Build Docker image', value: 'bdocker'}
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
      <li> Install Docker Desktop. The installation guide for the Home version of Windows can be found <a href="https://docs.docker.com/docker-for-windows/install-windows-home/">here</a>, and the guide for other versions can be found <a href="https://docs.docker.com/docker-for-windows/install/">here</a>.</li>
      <li> Download the Docker image. This can be done with <code>docker pull ariostas/cyt</code>.</li>
      <li>Create a shorter tag for the Docker image. This step is only for convenience. This can be done with <code>docker tag ariostas/cyt cyt</code></li>
      </ol>
    </TabItem>
    <TabItem value="with">
      <ol>
      <li> Install Docker Desktop. The installation guide for the Home version of Windows can be found <a href="https://docs.docker.com/docker-for-windows/install-windows-home/">here</a>, and the guide for other versions can be found <a href="https://docs.docker.com/docker-for-windows/install/">here</a>.</li>
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
      <li> Install Docker Desktop. The installation guide for the Home version of Windows can be found <a href="https://docs.docker.com/docker-for-windows/install-windows-home/">here</a>, and the guide for other versions can be found <a href="https://docs.docker.com/docker-for-windows/install/">here</a>.</li>
      <li> Clone the <a href="https://github.com/ariostas/cyt">CYT GitHub repository</a>. This can be done with <code>git clone https://github.com/ariostas/cyt.git</code> or simply by downloading the zipped repo and unzipping it.</li>
      <li>Build the Docker image. The Docker image can be built by first navigating to the root CYT folder on the terminal and then running <code>docker build -t cyt .</code> (note the period at the end).</li>
      </ol>
    </TabItem>
    <TabItem value="with">
      <ol>
      <li> Install Docker Desktop. The installation guide for the Home version of Windows can be found <a href="https://docs.docker.com/docker-for-windows/install-windows-home/">here</a>, and the guide for other versions can be found <a href="https://docs.docker.com/docker-for-windows/install/">here</a>.</li>
      <li> Clone the <a href="https://github.com/ariostas/cyt">CYT GitHub repository</a>. This can be done with <code>git clone https://github.com/ariostas/cyt.git</code> or simply by downloading the zipped repo and unzipping it.</li>
      <li>Activate Mosek. This is done by simply placing the license file in <code>cyt\external\mosek\mosek.lic</code>.</li>
      <li>Build the Docker image. The Docker image can be built by first navigating to the root CYT folder on the terminal and then running <code>docker build -t cyt .</code> (note the period at the end).</li>
      </ol>
    </TabItem>
  </Tabs>

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
