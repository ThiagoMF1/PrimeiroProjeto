<h1> Primer Proyecto </h1>


<h2>▶ Descripción del Proyecto </h3>
<p> el proyecto fue creado con el fin de comprender mejor </p>

<h2>▶ Temas </h2>
<p>• Herramientas Recomendadas </p>
<p>• Dependencias</p>
<p>• Características </p>
<p>• Cómo ejecutar la API </p>

<h2>▶ Herramientas recomendadas </h2>
<p> • VSCode</p>
<p> • Postman</p>

<h2>▶ Dependencias</h2>
<p>• express</p>
<p>• bcrypt</p>
<p>• jsonwebtoken</p>
<p>• mongoose</p>

<h2>▶ Características </h2>
<p>➝ Registrar nuevos usuarios</p>
<p>➝ Lista de todos los usuarios</p>
<p>➝ Validación de inicio de sesión y contraseña</p>
<p>➝ Rutas de autenticación</p>

<h2>▶ Cómo ejecutar la API</h2>
<h3> Instalar Node.js</h3>
<pre><code>https://nodejs.org/en/</code></pre>

<h3> Instalar Git</h3>
<h3> Clonación y ejecución </h3>

<p> En tu terminal, clona el proyecto.:</p>
<pre><code>git clone https://github.com/ThiagoMF1/PrimeiroProjeto</code></pre>

<p> Acceder a la raíz del proyecto.:</p>
<pre><code>cd PrimeiroProjeto/</code></pre>

<p> Instalar las dependencias:</p>
<pre><code>npm install</code></pre>

<p> Inicie el servidor:</p>
<pre><code>node ProjetoBasico/SRC/server.js</code></pre>
<h3> Probando la API</h3>
<p> Instale Postman u otra aplicación para ejecutar la API</p>
<pre><code>https://www.postman.com/downloads/</code></pre>
<p>Nota: El puerto predeterminado para el servidor es 3000. Para acceder a la API, usar: localhost:3001</p>

</br>
<h3> usuario </h3>
<h4>💠 Para crear un usuario</h4>
<p> POST método y camino: localhost:3001/auth/register</p>
<p> Entonces, ir a Body > raw > cambie de texto a JSON y use el siguiente formato:</p>
<pre><code>
{
    "name":"nombre",
    "email":"email@gmail.com",
    "password":"contraseña"
}
</pre></code>
</br>

<h4>💠 Para enumerar todos los usuarios:</h4>
<p> GET método y camino: localhost:3001/admin/users</p>
</br>

<h4>💠 Iniciar sesión </h4>
<p> POST método y camino: localhost:3001/auth/login</p>
<p> Entonces, ir a Body > raw > cambie de texto a JSON y use el siguiente formato:</p>
<pre><code>
{
    "email":"email@gmail.com",
    "password":"contraseña"
}
</pre></code>
</br>
