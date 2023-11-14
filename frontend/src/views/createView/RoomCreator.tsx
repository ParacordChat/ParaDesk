import { Box, Button, CheckBox, Text, TextInput } from "grommet";
import {
	CircleQuestion,
	// Download,
	Login,
	Organization,
	Risk
} from "grommet-icons";
import { route } from "preact-router";
import { useRef, useState } from "preact/hooks";
import packageJson from "../../../package.json";
import GenericHeader from "../../helpers/components/GenericHeader";
import { genId } from "../../helpers/utils";

export function RoomCreator() {
	const [usePassword, setUsePassword] = useState(true);
	const roomRef = useRef<HTMLInputElement>(null);
	const loadRoom = () =>
		route(`/${usePassword ? "s" : "p"}/${roomRef.current?.value}`);
	return (
		<>
			<GenericHeader>
				<Box
					background={{
						image: "url(./distbg.svg)",
						size: "cover",
						position: "center"
					}}
					direction="column"
					style={{ 
						height: "100vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
						paddingBottom: "3em"
					 }}
				>
					<Text size="xxlarge" style={{ background: "black" }}>
              Want privacy? Choose <b style={{ color: "#4bffac" }}>Para</b>
						<b style={{ color: "#af79ff" }}>cord</b>.
					</Text>
					<Text size="small" style={{ background: "black" }}>
              Send multiple gigabytes, Call and chat without anyone in the
              middle.
					</Text>

					<Box
						border={{ color: "brand", size: "large" }}
						round="medium"
						pad="medium"
						style={{
							background: "black",
							marginTop: "10vh",
							marginBottom: "10vh",
							width: "50vh",
							height: "30vh"
						}}
					>
						<Text size="medium">Create a room:</Text>
						<Box direction="row">
							<TextInput
								border={{ color: "brand", size: "small" }}
								ref={roomRef}
								name="userInput"
								autoComplete="off"
								icon={<Login />}
								placeholder="Room ID"
								onKeyUp={(e: { key: string }) => {
									if (e.key === "Enter") {
										loadRoom();
									}
								}}
							/>
							<Button
								icon={<Risk />}
								onClick={() =>
									roomRef.current && (roomRef.current.value = genId(6))
								}
								label="Random"
							/>
						</Box>
						<Box direction="row">
							<CheckBox
								pad="small"
								checked={usePassword}
								label="Use Password?"
								color="brand"
								onChange={(event: {
                    target: {
                      checked: boolean | ((prevState: boolean) => boolean);
                    };
                  }) => setUsePassword(event.target.checked)}
							/>
						</Box>
						<Button onClick={loadRoom} label="Go" primary />
					</Box>

					<Box direction="row">
						<Button
							style={{
								background: "black",
								border: "1px solid #af79ff",
								clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 40%)",
								padding: "1em",
								paddingBottom: "2em"
							}}
							onClick={() => route("/Enterprise")}
						>
							<Box
								direction="column"
								style={{
									alignItems: "center",
									justifyContent: "center"
								}}
							>
                  For Business
								<Organization />
							</Box>
						</Button>
						{/* <Button
							pad="large"
							style={{
								background: "#4bffac",
								border: "1px solid #4bffac",
								clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
								padding: "1em"
							}}
							onClick={() => {
								window.location.href =
                    "https://github.com/ParacordChat/paracord/releases/tag/allplatforms";
							}}
						>
							<Box
								direction="column"
								style={{
									alignItems: "center",
									justifyContent: "center",
									color: "black"
								}}
							>
                  Paracord Desktop(Beta)
								<Download />
							</Box>
						</Button> */}
						<Button
							pad="large"
							style={{
								background: "black",
								border: "1px solid #4bffac",
								clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
								padding: "1em"
							}}
							onClick={() => {
								route(`/About`);
							}}
						>
							<Box
								direction="column"
								style={{
									alignItems: "center",
									justifyContent: "center"
								}}
							>
                  About Paracord
								<CircleQuestion />
							</Box>
						</Button>
					</Box>

					<Text size="xsmall" style={{ background: "black" }}>
              Copyright {new Date()
							.getFullYear()} Paracord. Version:{" "}
						{packageJson.version}
					</Text>
				</Box>
			</GenericHeader>
		</>
	);
}