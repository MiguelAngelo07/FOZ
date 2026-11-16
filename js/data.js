/* ===== EDITE AQUI: vídeos e depoimentos =====
   cat: 'filme' | 'teaser' · type: 'yt' (YouTube) | 'vm' (Vimeo) · id: código do vídeo */
const U=id=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=75`;
const VID='aqz-KE-bpKQ';
const VIDEOS=[
{cat:'filme',t:'Ana & Pedro',s:'Fazenda Vila Rica',d:'4:12',type:'yt',id:VID,img:U('photo-1519741497674-611481863552')},
{cat:'filme',t:'Marina & Lucas',s:'Manaus, AM',d:'3:48',type:'yt',id:VID,img:U('photo-1465495976277-4387d4b0b4c6')},
{cat:'filme',t:'Beatriz & Rafael',s:'Presidente Figueiredo',d:'5:03',type:'yt',id:VID,img:U('photo-1511795409834-ef04bbd61622')},
{cat:'filme',t:'Camila & João',s:'Igreja da Matriz',d:'4:40',type:'yt',id:VID,img:U('photo-1519225421980-715cb0215aed')},
{cat:'filme',t:'Júlia & Thiago',s:'Rio Negro',d:'3:30',type:'yt',id:VID,img:U('photo-1537633552985-df8429e8048b')},
{cat:'teaser',t:'Larissa & Davi',s:'Pré-wedding',d:'1:05',type:'yt',id:VID,img:U('photo-1583939003579-730e3918a45a')},
{cat:'teaser',t:'Helena & Caio',s:'Teaser do casamento',d:'0:58',type:'yt',id:VID,img:U('photo-1606216794074-735e91aa2c92')},
{cat:'teaser',t:'Sofia & Bruno',s:'Ensaio ao pôr do sol',d:'1:20',type:'yt',id:VID,img:U('photo-1522673607200-164d1b6ce486')}];
const DEPOS=[
['Assistimos abraçados, no sofá, e choramos nos primeiros dois minutos. Ouvir a voz do meu pai no discurso, de novo, não tem preço.','Ana & Pedro — Fazenda Vila Rica'],
['Nem lembrávamos que tinham câmeras por perto. O filme mostra exatamente como foi o dia: leve, barulhento e cheio de amor.','Marina & Lucas — Manaus'],
['Já vimos mais de vinte vezes. Minha avó pede para passar de novo toda vez que a família se reúne.','Beatriz & Rafael — Presidente Figueiredo'],
['Os votos ficaram nítidos, cada palavra. Foi como estar no altar outra vez.','Camila & João — Igreja da Matriz'],
['Não tivemos que posar para nada. Nos vimos como somos, e isso foi o mais bonito.','Júlia & Thiago — Rio Negro'],
['O teaser chegou uma semana depois e já valeu o casamento inteiro de novo.','Helena & Caio — Manaus']];
