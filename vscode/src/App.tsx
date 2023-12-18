import { 
  File, 
  Search, 
  GitBranch, 
  BugPlayIcon, 
  Blocks, 
  UserCircle2, 
  Settings, 
} from 'lucide-react'

import AceEditor from 'react-ace'

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";


const App = () =>  {

  return(
    <main className="w-[1220px] h-[700px] bg-bg-vscode rounded-md shadow-m shadow-black">

      <header className="bg-menu-bar flex items-center justify-between pl-3 pr-8 p-2 w-[100%] rounded-t-md" >

        
        <div className="flex gap-2"> 
          <div className="w-[15px] cursor-pointer h-[15px] bg-[red] rounded-full"></div>
          <div className="w-[15px] cursor-pointer h-[15px] bg-[yellow] rounded-full"></div>
          <div className="w-[15px] cursor-pointer h-[15px] bg-[#1dff1d] rounded-full"></div>
        </div>

          <h1 className="text-gray-200"> miguelsantos.txt -- vscode </h1>
        <span className="invisible"></span>

      </header>

      <div className='h-[94%] flex'>
        <aside className="flex h-[100%] justify-between flex-col gap-4 pl-2 pr-2 pt-2">
          <div className='flex gap-4 flex-col'>
            <File color='#b7b7b7' className='cursor-pointer' size={25} />
            <Search color='#808080' className='cursor-pointer' size={25} />
            <GitBranch color='#808080' className='cursor-pointer' size={25} />
            <BugPlayIcon color='#808080' className='cursor-pointer' size={25} />
            <Blocks color='#808080' className='cursor-pointer' size={25} />
          </div>

          <div className="flex gap-3 flex-col pb-4">
            <UserCircle2 color='#808080' className='cursor-pointer' size={25} />
            <Settings color='#808080' className='cursor-pointer' size={25} />
          </div>
        </aside>

        <div className=" pt-4 w-[230px] bg-menu-vscode font-semibold">
          <h2 className="px-[20px] text-[#a7a7a7bc] mb-[30px]"> EXPLORER </h2>

          <p className='flex p-2 hover:bg-[#3a4151]  hover:text-green-200 cursor-pointer gap-2 text-[.9rem] items-center text-cyanSelectText'><File size={20} color='blue'  /> <span>miguelsantos.txt</span>  </p>
        
        </div>

          <div className='flex flex-col h-full w-full'>
            <div className='h-[60px] w-[220px]'>
              <h2 className='flex bg-menu-vscode p-3 gap-2 hover:bg-[#3a4151]  hover:text-green-200 cursor-pointer items-center text-cyanSelectText'> <File size={20} color='blue' /> miguelsantos.txt </h2>
            </div>
            <div className='h-full w-full'>
          
            <AceEditor 
            className='bg-bg-vscode'
            height='100%'
            width='100%'
            fontSize={20}
          
            mode="javascript"
            theme="twilight"
            value='console.log()'
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
  />,

            </div>
          </div>

      </div>

      </main>
  )

}

export default App
