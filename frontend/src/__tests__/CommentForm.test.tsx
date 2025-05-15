import {render, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { CommentForm } from "../components/CommentForm"

describe('CommentForm', () => {
    it('deve exibir o comentário', async ()=>{
        const onSubmitMock = vi.fn()
        const user = userEvent.setup()
        render(<CommentForm onSubmit={onSubmitMock} />)
        const commentInput = screen.getByLabelText('Comentário')
        const submit = screen.getByRole('button', {name: 'Enviar'})
        await user.type(commentInput, 'Comentário teste')
        await user.click(submit)
        expect(onSubmitMock).toHaveBeenCalledWith(
            {
                "comment": 'Comentário teste'
            }
        )
    })
    
})