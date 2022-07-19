
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleLog.css">
    <script defer src="mainLogin.js"></script>
    <title>PagPrincipal</title>
</head>
<body>

    <div class="container">
        <h2 class="title">Regístrate y da el primer paso para descubir tu vocación</h2>
        <div class="container-header">
            <div class="header-item1">QUEREMOS CONOCERTE</div>
            <div class="header-item2">DÉJAMOS TUS DATOS</div>

        </div>
       <form class="datos" method="post">
            <input type="text"
            id="name"
            autocomplete="off"
            class="text-input"
            placeholder="nombres"
            required>
            <label for="" class="label-name">nombres*</label>

            <input type="text"
            id="lastname"
            placeholder="apellidos"
            autocomplete="off"
            class="text-input"
            required >
            <label for="" class="label-lastname">apellidos*</label>

            <input type="tel"
            id="phone"
            placeholder="teléfono"
            autocomplete="off"
            class="text-input"
            required>
            <label for="" class="label-phone">teléfono*</label>
            <label for="">campus*</label>
            <select id="campus">
                <option value="1">Ciudad Piura</option>
            </select>
  

            <label for="">nivel de estudios*</label>
            <select id="nivel-estudios">
                <option value="1">Culmine el colegio</option>
            </select>
           
            <label for="">(*)Campos obligatorios</label>
       </form>
      <a href="index.html" class="btn">Siguiente</a>
    </div>
   
</body>
</html>