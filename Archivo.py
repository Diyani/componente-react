 Nodo de clase :
    def  __init__ ( self , val ):
        yo . l  =  Ninguno
        yo . r  =  Ninguno
        yo . v  =  val

 árbol de clases :
    def  __init__ ( yo ):
        yo . root  =  Ninguno

    def  getRoot ( self ):
        volver a  sí mismo . raíz

    def  add ( self , val ):
        si  yo . root  es  Ninguno :
            yo . root  =  Nodo ( val )
        otra cosa :
            yo . _add ( val , self . root )

    def  _add ( self , val , nodo ):
        si  val  <  nodo . v :
            si  nodo . Yo  no es  Ninguno : 
                yo . _add ( val , nodo . l )
            otra cosa :
                nodo . l  =  nodo ( val )
        otra cosa :
            si  nodo . r  no es  Ninguno : 
                yo . _add ( val , nodo . r )
            otra cosa :
                nodo . r  =  nodo ( val )

    def  encontrar ( self , val ):
        si  yo . root  no es  None : 
            volver a  sí mismo . _find ( val , self . root )
        otra cosa :
            regresar  Ninguno

    def  _find ( self , val , node ):
        si  val  ==  nodo . v :
             nodo de retorno
        elif ( val  <  nodo . v  y  nodo . l  no es  Ninguno ): 
            volver a  sí mismo . _find ( val , nodo . l )
        elif ( val  >  nodo . v  y  nodo . r  no es  Ninguno ): 
            volver a  sí mismo . _find ( val , nodo . r )

    def  deleteTree ( yo ):
        # recolector de basura hará esto por nosotros. 
        yo . root  =  Ninguno

    def  printTree ( uno mismo ):
        si  yo . root  no es  None : 
            yo . _printTree ( auto . raíz )

    def  _printTree ( self , nodo ):
        si el  nodo  no es  Ninguno : 
            yo . _printTree ( nodo . l )
            imprimir ( str ( nodo . v ) +  '' )
            yo . _printTree ( nodo . r )

# 3
# 0 4
N.º 2 8
árbol  =  Árbol ()
árbol . añadir ( 3 )
árbol . añadir ( 4 )
árbol . agregar ( 0 )
árbol . añadir ( 8 )
árbol . añadir ( 2 )
árbol . printTree ()
imprimir ( árbol . encontrar ( 3 ). v )
imprimir ( árbol . encontrar ( 10 ))
árbol . deleteTree ()
árbol . printTree ()
