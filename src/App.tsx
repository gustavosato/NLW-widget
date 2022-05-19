/* interface ButtonProps{
  text?: string;
}
//ponto de interrogação na frente do text indica que esse parametro é opcional

function Button(props: ButtonProps){
  return <button className="bg-violet-500 p-2 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? "Default"}</button>
}
//Acessa as propriedades da interface
//1 rem = 16px
//cada p-1 equivale a 0.25rem ou 4px


function App() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar"/>
      <Button text="OK"/>
      <Button />
    </div>
  )
}
//Sempre que houver uma função retornando um HMTL, isso será um componente
//O nome do arquivo deve ser o mesmo da função e iniciar com letra maiuscula
export default App
 */

import { Widget } from "./components/Widget";

export function App(){
  return <Widget />
}