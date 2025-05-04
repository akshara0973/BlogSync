
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
  border: 1px solid #2c5364;
  background-color: #203a43;
  color: #f0f0f0;
  border-radius: 12px;
  overflow: hidden;

  & th, & td {
    border-bottom: 1px solid #2c5364;
    color: #d0d0d0;
    padding: 12px 16px;
  }

  & th {
    background-color: #2c3e50;
    color: #ffffff;
    font-weight: bold;
  }
`;
const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: linear-gradient(135deg,rgb(35, 74, 87),rgb(20, 51, 104));
  color: #ffffff;
  font-weight: bold;
  text-transform: none;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(135deg, #2a5298, #1e3c72);
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #64b5f6;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;


const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </Link>
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"}>
                                All Categories
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;