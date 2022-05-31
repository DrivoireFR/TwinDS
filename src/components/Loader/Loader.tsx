import { twa } from "../../utils/twa";

export interface LoaderProps {
    size?: number;
    borderSize?: number;
    type?: string;
}

export function Loader({size = 1, borderSize = 2, type = "pulse"}: LoaderProps){
    if ( type === "pulse" ) return (
        <div style={{background: '#3D8EA8'}} className={twa`w-[${size}rem] h-[${size}rem] border-[${borderSize}px] border-gray-200 rounded-full animate-pulse`}/>
    );

    if ( type === "bounce" ) return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '5px'}}>
            <div style={{background: '#3D8EA8'}} className={twa`w-[1rem] h-[1rem] rounded-full animate-bounce`}/>
            <div style={{background: '#3D8EA8'}} className={twa`w-[1rem] h-[1rem] rounded-full animate-bounce delay-75`}/>
            <div style={{background: '#3D8EA8'}} className={twa`w-[1rem] h-[1rem] rounded-full animate-bounce delay-100`}/>
        </div>
    );

    else return (
        <div style={{borderTop: `solid ${borderSize}px #3D8EA8`}} className={twa`w-[${size}rem] h-[${size}rem] border-[${borderSize}px] border-gray-200 rounded-full animate-spin`}/>
    )
}

export function BackdropLoader({size = 3, borderSize = 4, type = "spin"}: LoaderProps){
    return (
        <div className={twa`w-screen h-screen z-10 fixed top-0 left-0 flex justify-center items-center bg-[#00000080]`}>
            <Loader size={size} borderSize={borderSize} type={type}/>
        </div>
    );
}
