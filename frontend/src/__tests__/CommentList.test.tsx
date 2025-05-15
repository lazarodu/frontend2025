import {render, screen} from '@testing-library/react'
import { CommentList } from '../components/CommentList'


describe('Comment', () => {
    it('deve exibir múltiplos comments',()=>{
        const comments = [
            { id: '1',  comment: 'Comment 1', autor: 'Lázaro', data:'12/05/2025'},
            { id: '2',  comment: 'Comment 2', autor: 'Lázaro', data:'12/05/2025'}
        ]
        render(
            <CommentList comments={comments}/>
        )
        expect(screen.getByText("Comment 1")).toBeInTheDocument()
        expect(screen.getByText("Comment 2")).toBeInTheDocument()
    })
})