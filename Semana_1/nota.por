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
		
		escreva("A media vale="+media+"\n")
		
		se(media >= 6.0 ){
		    escreva("Parabens voce foi aprovado(a)!\n")
		}senao{
		    escreva("oba  nos vemos ano que vem! \n")
		}
		escreva("Fim do programa\n")
	}
}
	
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 247; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */