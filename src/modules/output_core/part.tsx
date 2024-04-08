function Part(){
    return(
        <div id = "part" className="mx-2"> 
        <table className="w-full">
            <tr className="">
                <td><h1 className="font-semibold">Title 1</h1></td><td className="text-right font-semibold">Duration</td>
            </tr>
            <tr>
                <td colSpan = {2}>
                <p>One-line description</p>
                    <ul className="px-2 list-disc list-inside flex flex-col">
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <li>List item 2</li>
                    </ul>
                </td>
            </tr>
        </table>
                     
                    
        </div>
    )
}
export default Part