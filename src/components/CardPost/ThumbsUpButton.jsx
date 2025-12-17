'use client'

import { useFormStatus } from "react-dom"
import { IconButton } from "../IconButton"
import { ThumbsUp } from "../ThumbsUp"
import { Spinner } from "../Spinner"

export const ThumbsUpButton = () => {
    const { pending } = useFormStatus()

    return (
        <IconButton aria-label="Curtir post" disabled={pending}>
            {pending ? <Spinner /> : <ThumbsUp />}
        </IconButton>
    )
}