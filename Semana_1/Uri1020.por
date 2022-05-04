programa
{
	
	funcao inicio()
	{
		inteiro idade, qtAnos, qtMeses, qtDias, sobra
		
		// entrada:a idade em dias
		escreva("Digite a idade em dias:")
		leia(idade)
		
		// processamento:dividir a idade por 365 e obter a quantidade de anos
		qtAnos=idade/365
		
		//a partir da sobra da divisão anterior, fazer o seguinte:
		sobra=idade%365
		
		// dividir o valor que sobrou por 30 e obter a quantidade de meses (já que 1 mes=30 dias)
		qtMeses=sobra/30
		
		// finalmente pegar a sobra da divisão anterior, que irá resultar na quantidade de dias
		qtDias=sobra%30


		
		escreva(qtAnos+" ano(s)\n")
		escreva(qtMeses+" mes(es)\n")
		escreva(qtDias+" dia(s)\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 666; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */