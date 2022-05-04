programa
{
	
	funcao inicio()
	{
		real nota1, nota2, media
		escreva("Digite a nota 1:")
		leia(nota1)
		escreva("Digite a nota 2:")
		leia(nota2)
		
		media=(nota1+nota2)/2
		
		se (media >=9 e media <= 10){// vou testar se é conceito A
		   escreva("conceito A")
		}senao{ // ainda pode ser B, C,D ou R
		    se (media >=8 e media<9){
		    	escreva("conceito B")
			}senao{ // ainda pode ser C,DouR
				se (media >=6 e media<8){ // testo seéc
			   escreva("conceito C")
				}senao{// ainda pode serDouR
				    se (media >=6 e media<6){ // testo seéD
				        escreva("conceito D")
				    }
				    senao{ // so pode serR
				        escreva("Reprovado")
    					}
		    		}
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 694; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */