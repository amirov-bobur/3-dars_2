import { Home } from "@mui/icons-material";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
function NotFound() {
	return (
		<Box
			sx={{
				padding: "5rem",
				height: "90vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Stack gap={4} alignItems={"center"}>
				<Typography fontWeight={"bold"} textAlign={"center"} variant='h1' fontSize={"5rem"} component='h2'>
					404 Sahifa topilmadi
				</Typography>

				<Box>
					<Button startIcon={<Home />} color='success' variant='contained' LinkComponent={Link} to={"/"}>
						Bosh sahifa
					</Button>
				</Box>
			</Stack>
		</Box>
	);
}

export default NotFound;
