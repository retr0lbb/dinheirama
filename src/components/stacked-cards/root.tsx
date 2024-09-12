interface RootProps {
    children: React.ReactNode
}
export function Root(props: RootProps){
    return(
        <div className="relative col-span-2 row-span-2 m-4">
            {props.children}
        </div>
    )
}