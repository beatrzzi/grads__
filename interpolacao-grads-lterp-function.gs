#interpolacao 
#grads
#exemplo utilizando dados de temperatura do SaMet e do modelo BRAMS
#interpolacao no periodo de 1 mes para toda a grade necessaria

'reinit'
#dado com resolução espacial maior
'open .../tmax.ctl'
#dado com resolução espacial menor
'open .../brams.ctl'

dd=1
while(dd<=31)
if (dd<10) ; dd='0'dd ; endif
'set fwrite -be -sq .../brams2samet_tmax.201608'dd'.dat'
'set gxout fwrite'
'set undef -9999'
'set x 1 1001'
'set y 1 1381'
'set z 1'
'set t 'dd
'd lterp(t2mj.2(t='dd'),tmax.1(t=1),aave)'
'disable fwrite'
dd=dd+1
endwhile
return
