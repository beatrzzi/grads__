# autor: beatriz miranda
# script para verificacao ou plot vertical da vorticidade relativa no centro de um ciclone
# esse script necessita de conhecimento previo das latitudes ao centro do ciclone. além disso, ele não possui um loop,o que faz com q seja necessaria a alteração da latitude no gs a cada plot.

'reinit'
'set display white'
'c'

# tempo definido no terminal seguindo o formato em (ex:)
say "Enter date (ex:00Z06DEC2016): "
pull tim
say "Enter lat (ex:50) *sem sinal: "
pull lat

# dado1
'sdfopen /.nc'
#ou 'open /.ctl'

# escala de cor 
'set rgb 20    0   24  137'
'set rgb 21   68    3  138'
'set rgb 22  108    0  140'
'set rgb 23  138    0  141'
'set rgb 24  163    9  138'
'set rgb 25  184   39  131'
'set rgb 26  202   65  120'
'set rgb 27  216   90  104'
'set rgb 28  227  116   80'
'set rgb 29  234  142   43'
'set rgb 30  237  169    0'
'set rgb 31  235  196    0'
'set rgb 32  228  225    0'
'set rgb 33  218  255   71'
'set rgb 34  250  250  250'

#delimitação da região para o calculo da vorticidade na horizontal
'set lat -70 -20'
'set lon -80 -10'

# detalhes da figura, eixos e tamanho do grafico
'set parea 1.0 9.0 0.5 8.0'
'set xlopts 1 12 0.23'
'set ylopts 1 12 0.23'
'set clopts -1 -1 0.12'
'set xlint 5'

# seleção do tempo, tipo de grafico (vertical) e calculo da vorticidade a partir de u e v
'set time 'tim 
'set zlog on'
'set lev 1000 200'
'vort = hcurl(u,v)'

# selecao da faixa de longitude
'set lon -65 -25'
# selecao do ponto de lat no centro do ciclone
# retirar o menos antes de lat na linha seguinte caso se trate de uma latitude no hemisferio norte
'set lat -'lat
'set grads off'
'set grid off'
'set gxout shaded'

'set ccols   20   22   24   26   28   30   32  34'
'set clevs -6.0 -5.0 -4.0 -3.0 -2.0 -1.0  0.0' 

# shaded - vorticidade relativa (10-5.s-1)
'd (vort)*10000'

# barra de cores e titulo
'run /media/extra/ic_inpe/scripts/cbarn.gs 1.1 1 9.5 4.25'
'set string 1 tc 12 0'
'set strsiz 0.23 0.23'
'draw string 5.3 8.35 ' tim' ('lat'`a0`nS)'

# salvar se for necessario
'gxprint /... x1800 y1400'
