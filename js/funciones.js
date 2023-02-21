function Informacion_personal(){
    document.getElementById('Informacion-personal').style.display = 'block';
    document.getElementById('Educacion').style.display = 'none';
    document.getElementById('Experiencia').style.display = 'none';
    document.getElementById('Referencias-laborales').style.display = 'none';
  } 

  function Educacion(){
    document.getElementById('Informacion-personal').style.display = 'none';
    document.getElementById('Educacion').style.display = 'block';
    document.getElementById('Experiencia').style.display = 'none';
    document.getElementById('Referencias-laborales').style.display = 'none';
  } 

  function Experiencia(){
    document.getElementById('Informacion-personal').style.display = 'none';
    document.getElementById('Educacion').style.display = 'none';
    document.getElementById('Experiencia').style.display = 'block';
    document.getElementById('Referencias-laborales').style.display = 'none';
  } 

  function Referencias_laborales(){
    document.getElementById('Informacion-personal').style.display = 'none';
    document.getElementById('Educacion').style.display = 'none';
    document.getElementById('Experiencia').style.display = 'none';
    document.getElementById('Referencias-laborales').style.display = 'block';
  } 