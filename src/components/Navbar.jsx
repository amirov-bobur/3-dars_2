import { Box, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
	return (
		<Box
			px={4}
			sx={{
				height: "10vh",
				borderBottom: "1px solid rgba(0,0,0,0.40)",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: "#383838",
			}}
		>
			<Box>
				<Stack flexDirection={"row"} gap={2}>
					<Link className='nav-link' to='/'>
						Bosh sahifa
					</Link>

					<Link className='nav-link' to='/about'>
						Biz haqimizda
					</Link>

					<Link className='nav-link' to='/contact'>
						Kontakt
					</Link>

				</Stack>
			</Box>

			<Box>
				<Stack flexDirection={"row"} gap={2}>
					<Button  variant='contained' LinkComponent={Link} to='/register'>
						Ro'yxatdan o'tish
					</Button>
					<Button variant='text' sx={{ color: "#fff" }} LinkComponent={Link} to='/login'>
						Kirish
					</Button>
				</Stack>
			</Box>

		</Box>
	);
}
