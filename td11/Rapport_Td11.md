<div style="display:flex;justify-content:space-between">
    <div>
        <strong>
            Realise par :
        </strong>  
        <br>&nbsp;&nbsp;&nbsp;&nbsp;Yasser Nabouzi
        <br>&nbsp;&nbsp;&nbsp;&nbsp;Omar Lahbabi 
    </div>
    <div>
        <div>
            2021-2022
        </div>
        <div>
            <img src="../td1/assets/ensalogo.png" width = 90 style="margin-top:20px;position:relative;right:12px">
        </div>
    </div>
</div>
<br>
<div style="position:relative;bottom:51px">
    <strong>
        Filliere :
    </strong>  IID1
</div>
<div style = "text-align:center">
    <strong>
        Encadre par : 
    </strong>Noreddine GHERABI 
</div>
<div style="font-size:35px;font-weight:bold;text-align:center;">
    Rapport Des TPs Java
</div>

# Tp11

## EX01
```java
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	        String servletPath = request.getServletPath();


	        response.setContentType("text/html");
	        PrintWriter pw = response.getWriter();
	        pw.print("nom/prenom: " + servletPath + "<br/>");
	}
```
> Input / ouput :
![alt text](assets/result01.png)
## EX02
```html
<body>
	<h3>Formulaire</h3>
	<form action="formulaire" method="get">
		<table>
			<tr>
				<td>CNE:</td>
				<td><input type="text" name="CNE"></td>
			</tr>
			<tr>
				<td>Nom:</td>
				<td><input type="text" name="Nom"></td>
			</tr>
			<tr>
				<td>Prenom:</td>
				<td><input type="text" name="Prenom"></td>
			</tr>
			<tr>
				<td>Ville:</td>
				<td><input type="text" name="Ville"></td>
			</tr>
			<tr>
				<td>Date de naissance:</td>
				<td><input type="text" name="Dnaissance"></td>
			</tr>
			<tr>
				<td>Bourse (DH):</td>
				<td><input type="text" name="Bourse"></td>
			</tr>
			<tr>
				<td><button type="submit" value="Valider">Valider</button></td>
				<td><button type="reset" value="Supprimer">Supprimer</button></td>
			</tr>
		</table>
	</form>
</body>
```
> Input / ouput :
![alt text](assets/formulaire02.png)
```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String CNE = request.getParameter("CNE");
		String Nom = request.getParameter("Nom");
		String Prenom = request.getParameter("Prenom");
		String Ville = request.getParameter("Ville");
		String Dnaissance = request.getParameter("Dnaissance");
		String Bourse = request.getParameter("Bourse");
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.println("<p>CNE: " + CNE + "</p>");
		out.println("<p>Nom: " + Nom + "</p>");
		out.println("<p>Prenom: " + Prenom + "</p>");
		out.println("<p>Ville: " + Ville + "</p>");
		out.println("<p>Date de naissance: " + Dnaissance + "</p>");
		out.println("<p>Bourse (DH): " + Bourse + "</p>");

	}
```
> Input / ouput :
![alt text](assets/resultt02.png)
![alt text](assets/affichage02.png)
## EX03
```html
<body style="text-align: center;">
	<h3>Formulaire</h3>
	<form action="Login" method="post">
		<table style="margin-left: auto; margin-right: auto;">
			<tr><td>nom d'utilisateur: </td></tr>
			<tr><td><input style="padding: 0.5rem" type="text" name="1"></td></tr>
			<tr><td>mot de passe: :</td></tr>
			<tr><td><input style="padding: 0.5rem" type="password" name="2"></td></tr>
		</table>
		<input style="padding:0.6rem 1.3rem; margin-top: 10px; background-color: #00FFAB; border-radius: 10px; border: none; " type="submit" value="Login">
	</form>
</body>
```

> Input / ouput :
![alt text](assets/login03.png)
```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("1");
		String password = request.getParameter("2");
		request.setAttribute("user", username);
		request.setAttribute("passwd", password);
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		if (username.equals("user") && password.equals("user"))
		{		
			out.println("<p>Username: " + username + "</p>");
			out.println("<p>Password: " + password + "</p>");
		}
		else {
			out.println("nom d'utilisateur ou mot de passe incorrect");
			RequestDispatcher rd = request.getRequestDispatcher("login.jsp");
			rd.include(request, response);
		}
	}
```
> Input / ouput :
![alt text](assets/invalid.png)
![alt text](assets/invalid03.png)
![alt text](assets/valid.png)
![alt text](assets/valid03.png)
