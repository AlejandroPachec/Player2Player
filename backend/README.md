# Player2Player - P2P Marketplace

<div align="center"><img src="../logo.png" width="300px"></div>

🚨🚧🚧 **EN CONSTRUCCIÓN** 🚧🚧🚨

<ol id='menu'>
  <li>
    <a href='#sobre-el-proyecto'>Sobre el proyecto</a>
  </li>
  <li>
    <a href="#antes-de-empezar">Antes de empezar</a>
    <ul>
      <li><a href='#instalación'>Instalación</a></li>
      <li><a href='#endpoints'>Endpoints</a></li>
    </ul>
  </li>
  <li>
    <a href="#tecnologías-utilizadas">Tecnologías utilizadas</a>
  </li>
  <li>
    <a href="#autores">Autores</a>
  </li>

## Sobre el proyecto



## Antes de empezar
### Instalación
1. Clonar el repositorio
    ```
    git clone git@github.com:AlejandroPachec/Player2Player.git
    ```
2. Instalar las dependencias necesarias que incluye el proyecto
    ```
    npm install 
    ```
3. Crear la base de datos en MySQL Workbench
   ```sql
   CREATE DATABASE IF NOT EXISTS p2p_db;
   ```
4. Ejecutar la base de datos
    ```
    npm run db
    ```
5. Arrancar el servidor
   ```
   npm run dev
   ```

### Endpoints
  <table border width='400px'>
    <tbody>
      <tr>
        <th colspan="2">USUARIOS</th>
      </tr>
      <tr>
        <td align="center">POST</td>
        <td>user/create</td>
      </tr>
      <tr>
        <td align="center">POST</td>
        <td>user/login</td>
      </tr>
      <tr>
        <td align="center">GET</td>
        <td>user/profile/:idUser</td>
      </tr>
      <tr>
        <td align="center">PUT</td>
        <td>user/profile/edit/:idUser</td>
      </tr>
    </tbody>
  </table>

  <table border width='400px'>
    <tbody>
      <tr>
        <th colspan="2">PRODUCTOS</th>
      </tr>
      <tr>
        <td align="center">POST</td>
        <td>products/addProduct</td>
      </tr>
      <tr>
        <td align="center">GET</td>
        <td>products</td>
      </tr>
      <tr>
        <td align="center">GET</td>
        <td>products/:idProduct</td>
      </tr>
      <tr>
        <td align="center">PUT</td>
        <td>product/edit/:idProduct</td>
      </tr>
      <tr>
        <td align="center">DELETE</td>
        <td>product/delete/:idProduct</td>
      </tr>
    </tbody>
  </table>

  <table border width='400px'>
    <tbody>
      <tr>
        <th colspan="2">REVIEWS</th>
      </tr>
      <tr>
        <td align="center">POST</td>
        <td>product/review/:idUser</td>
      </tr>
      <tr>
        <td align="center">GET</td>
        <td>product/:idProduct/reviews</td>
      </tr>
    </tbody>
  </table>
   
  <table border width='400px'>
    <tbody>
      <tr>
        <th colspan="2">ORDERS</th>
      </tr>
      <tr>
        <td align="center">POST</td>
        <td>user/addOrder</td>
      </tr>
      <tr>
        <td align="center">GET</td>
        <td>user/order/:idOrder</td>
      </tr>
      <tr>
        <td align="center">GET</td>
        <td>user/orders</td>
      </tr>
    </tbody>
  </table>

<a href="#menu">Volver arriba</a>


## Tecnologías utilizadas
![Git](	https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![MySql](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=wProject_X)


## Autores
<a href="https://github.com/AlejandroPachec/Player2Player/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AlejandroPachec/Player2Player" />
  <img src="https://avatars.githubusercontent.com/u/98481536?s=100&v=4" style="border-radius: 50px; height: 65px; border: 1px solid #ABAFAD">
</a>