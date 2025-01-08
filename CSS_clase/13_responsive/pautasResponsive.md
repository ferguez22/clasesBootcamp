# Pautas Responsive

    1- Es indispensable el metaviewport
        <meta name="viewport" content="width=device-width,initial-scale=1.0">

    2- También es indispensable controlar el tamaño de las imagenes, se deben adaptar siempre al contenedor.
        img{
            width: 100%
            height: auto;
            display: block;
        }
    3- No usar medidas fijas (width: 100px), usar medidas porcentuales o max y min (max-width: 300px)

    4- Uos del mediqueries es un css dentro de un css
        - Breakpoint o puntos de corte, que definen el ancho de nuestros dispositivos, es decir cuando queremos que nuestra disposición cambie:
            - mobileFirst -> ancho min-width
            - desktop -> ancho max-width
                0 -> 425px => mobile
                426px -> 768px => mobile grande - tablet 7"
                769px -> 1004px => tablet grande - laptop pequeño
                1004px -> 1200px => portatiles, pantallas, etc
                1200px -> Alto formato 2k, 4k, retina, 8k
                