import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '..';

describe('Teste para o componente PostComments', () => {
    it('Deve inserir dois comentarios na lista', () => {
        render(<PostComments />);

        const input = screen.getByTestId('comment-input');
        const button = screen.getByTestId('comment-submit-button');

        fireEvent.change(input, { target: { value: 'Primeiro comentario' } });
        fireEvent.click(button);

        fireEvent.change(input, { target: { value: 'Segundo comentario' } });
        fireEvent.click(button);

        const commentItems = screen.getAllByTestId('comment-item');

        expect(commentItems).toHaveLength(2);
        expect(screen.getByText('Primeiro comentario')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentario')).toBeInTheDocument();
    });
});
