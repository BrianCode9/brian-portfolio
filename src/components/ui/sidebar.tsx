import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { ModeToggle } from './mode-toggle';

export function Sidebar() {
    return (
        <div className="bg-white justify-center items-center">
            <Sheet>
                <SheetTrigger asChild className="bg-white">
                    <Button className="">
                        <Menu className="" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="bg-suit-teal" side="left">
                    <SheetHeader className="bg-suit-teal">
                        <SheetTitle className="bg-suit-teal text-2xl">Menu</SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-col space-y-6">
                        <a href="#" className="hover:underline ml-8">Home</a>
                        <a href="#" className="hover:underline ml-8">About</a>
                        <a href="#" className="hover:underline ml-8">Projects</a>
                        <a href="#" className="hover:underline ml-8">YT Channel</a>
                        <a href="#" className="hover:underline ml-8">Contact</a>
                        <a href="#" className="hover:underline ml-8">Resume</a>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
