import {render, screen} from '@testing-library/react'
import { Post } from '../components/Post'

describe('Post', () => {
    it('deve exibir o título, a descrição e o conteúdo do post',()=>{
        render(
            <Post 
                title="Meu Post" 
                description="Minha Descrição" 
                content="Conteúdo teste" 
            />
        )
        expect(screen.getByText("Meu Post")).toBeInTheDocument()
        expect(screen.getByText("Minha Descrição")).toBeInTheDocument()
        expect(screen.getByText("Conteúdo teste")).toBeInTheDocument()
    })
})