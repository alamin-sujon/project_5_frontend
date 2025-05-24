
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import MainForm from "@/utils/forms/MainForm"
import MainInput from "@/utils/forms/MainInput"

import MainTextarea from "@/utils/forms/MainTextarea"
import { FieldValues, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { projectSchema } from "@/components/types/schema"
import { ImSpinner2 } from "react-icons/im"

export function CreateProjectModal({ handleCreate, setIsOpen, isOpen, isLoading }: { handleCreate: SubmitHandler<FieldValues>, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean, isLoading: boolean }) {
    return (

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant={'outline'} onClick={() => setIsOpen(true)}>Create Project</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md md:max-w-lg w-full">
                <DialogHeader>
                    <DialogTitle>Create A Project</DialogTitle>
                    <DialogDescription className="sr-only">
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <MainForm resolver={zodResolver(projectSchema)} onSubmit={handleCreate}>
                    <div className="space-y-4 mb-4">
                        <MainInput name="name" label="Name" />
                        <MainInput name="image" label="Image URL" type="url" />
                        <MainInput name="liveUrl" label="Live Link" type="url" />
                        <div className="grid grid-cols-2 gap-4">
                            <MainInput name="githubClient" label="Client (Optional)" type="url" />
                            <MainInput name="githubServer" label="Server (Optional)" type="url" />
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            <MainTextarea placeholder="separated by new line" name="coreFeatures" label="Core Features" />
                            <MainTextarea placeholder="separated by comma or new line" name="technologies" label="Tech Stacks" />
                        </div>
                        <MainTextarea name="description" label="Description" />
                    </div>
                    <DialogFooter>
                        <Button disabled={isLoading} variant={"default"} type="submit">
                            Create Blog {isLoading && <ImSpinner2 size={20} className="animate-spin my-auto ml-2" />}
                        </Button>
                        <DialogClose asChild>
                            <Button type="button" variant={"outline"} onClick={() => { }}
                            >
                                Cancel
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </MainForm>
            </DialogContent>
        </Dialog>
    )
}
