<h1>First Project</h1>

<h2>▶ Project Description</h3>
<p>The project was created with the aim of better understanding.</p>

<h2>▶ Topics</h2>
<p>• Recommended Tools</p>
<p>• Dependencies</p>
<p>• Features</p>
<p>• How to Run the API</p>

<h2>▶ Recommended Tools</h2>
<p>• VSCode</p>
<p>• Postman</p>

<h2>▶ Dependencies</h2>
<p>• express</p>
<p>• bcrypt</p>
<p>• jsonwebtoken</p>
<p>• mongoose</p>
<p>• moment</p>
<p>• validator</p>

<h2>▶ Features</h2>
<p>➝ Register new users</p>
<p>➝ List all users</p>
<p>➝ Login and password validation</p>
<p>➝ Authentication routes</p>
<p>➝ Delete users</p>
<p>➝ Achived users</p>
<p>➝ Update users</p>

<h2>▶ How to Run the API</h2>
<h3>Install Node.js</h3>
<pre><code>https://nodejs.org/en/</code></pre>

<h3>Install Git</h3>

<h3>Cloning and Execution</h3>
<p>In your terminal, clone the project:</p>
<pre><code>git clone https://github.com/ThiagoMF1/PrimeiroProjeto</code></pre>
<p>Access the project root:</p>
<pre><code>cd PrimeiroProjeto/</code></pre>
<p>Install the dependencies:</p>
<pre><code>npm install</code></pre>
<p>Start the server:</p>
<pre><code>node ProjetoBasico/SRC/server.js</code></pre>

<h3>Testing the API</h3>
<p>Install Postman or another application to run the API</p>
<pre><code>https://www.postman.com/downloads/</code></pre>
<p>Note: The default port for the server is 3000. To access the API, use: localhost:3001</p>
</br>
<h3>User</h3>

<h4>💠 To create a user</h4>
<p>POST method and path: localhost:4587/auth/register</p>
<p>Then, go to Body > raw > change from Text to JSON and use the following format:</p>
<pre><code>
{
    "name": "name",
    "email": "email@gmail.com",
    "password": "password"
}
</pre></code>
</br>

<h4>💠 To list all users:</h4>
<p>GET method and path: localhost:4587/admin/users</p>
</br>

<h4>💠 Login</h4>
<p>POST method and path: localhost:4587/auth/login</p>
<p>Then, go to Body > raw > change from Text to JSON and use the following format:</p>
<pre><code>
{
    "email": "email@gmail.com",
    "password": "password"
}
</pre></code>
</br>

<h4>💠 Delete a users</h4>
<p>POST method and path: localhost:4587/admin/users/:userId</p>
<p>Then, go to Headers > Key: Authorization > Value: Bearer "user token"</p>
</pre></code>
</br>

<h4>💠  Update users</h4>
<p>POST method and path: localhost:4587/admin/users/:userId</p>
<p>Then, go to Headers > Key: Authorization > Value: Bearer "user token"</p>
<p>Then, go to Body > raw > change from Text to JSON and use the following format:</p>
<pre><code>
{
  "name": "newUser",
  "email": "newEmail",
  "password": "newPassword",
  "archived": "true or false"
}
</pre></code>
</br>

</pre></code>
</br>
