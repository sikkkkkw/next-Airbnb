import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AddressRoutw(){
    return(
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors mb-10">
                    Where is your Home located?
                </h2>
            </div>
            <form className="w-3/5 mx-auto">
                <div className="mb-5">
                    <Select required>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a Country"/>
                        </SelectTrigger>
                    </Select>
                </div>
            </form>
        </>
    )
}