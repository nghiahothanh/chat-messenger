<template>
	<div>
		<div class="table100-nextcols">
			<div class="cell100 column1">
				Applications
			</div>
			<table>
				<tbody>
					<tr class="row100 body">
						<td class="cell100 column2">
							E-commerce
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							Metaverse and 3D games<v-icon color="rgba(30,39,50,.24)">
								mdi-help-circle-outline
							</v-icon>
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							-
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							QR code
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							-
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							3D ads
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							-
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							Developer
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							-
						</td>
					</tr>
				</tbody>
			</table>
			<div class="cell100 column1">
				What you will get?
			</div>
			<table>
				<tbody>
					<tr class="row100 body">
						<td class="cell100 column2">
							AR viewer
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							-
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							Interactive 3D viewer
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							JS script for easy integration
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							3D model
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
							<span>(Low-Poly)</span>
						</td>
						<td class="cell100 column4">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
							<span>(High-Poly)</span>
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							Photorealistic images
						</td>
						<td class="cell100 column3">
							-
						</td>
						<td class="cell100 column4">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
							<span>(6 images)</span>
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							High-res 360 turntable viewer
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							-
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							Modelry Quality Assurance
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							DAM
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
					</tr>
					<tr class="row100 body">
						<td class="cell100 column2">
							Support
						</td>
						<td class="cell100 column3">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
						<td class="cell100 column4">
							<input type="checkbox" checked="checked">
							<div class="checkmark" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name:"TableTable",
	data() {


		return {};
	}
};
</script>

<style lang="scss" scoped>
/* table */
.table100-nextcols,
.table100-nextcols table {
	width: 100%;
}

.table100 td {
	color: #999999;
}

.cell100 {
	padding-top: 16px;
	padding-bottom: 16px;
	min-height: 60px;
	border-top: 1px solid rgba(30, 39, 50, 0.12);
	align-items: stretch;
}

.cell100 span {
	position: absolute;
	left: 53%;
	top: 17px;
	font-size: 15px;
	font-weight: 400;
}

.column1 {
	width: 100%;
	background: rgba(30, 39, 50, 0.04);
	padding-left: 10px;
}

.column2 {
	width: 20%;
	/* padding-left: 55px; */
	font-size: 16px;
	font-weight: 400;
	padding-left: 10px;
	color: rgba(30, 39, 50, 0.8);
}

.column3 {
	position: relative;
	width: 40%;
	border-left: 1px solid rgba(30, 39, 50, 0.12);
	color: rgba(30, 39, 50, 0.8);
	text-align: center;
}

.column4 {
	position: relative;
	width: 40%;
	border-left: 1px solid rgba(30, 39, 50, 0.12);
	color: rgba(30, 39, 50, 0.8);
	text-align: center;
}

/* Checkbox */


/* Hide the default checkbox */
.table100-nextcols input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
}

.table100-nextcols {
	display: block;
	position: relative;
	font-size: 20px;
	user-select: none;
}

/* Create a custom checkbox */
.checkmark {
	position: relative;
	margin: 0 auto;
	height: 20px;
	width: 20px;
}

/* When the checkbox is checked, add a blue background */
.table100-nextcols input:checked~.checkmark {
	background-color: #00c853;
	border-radius: 25px;
	transition: 0.15s;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
	content: "";
	position: absolute;
	display: none;
}

/* Show the checkmark when checked */
.table100-nextcols input:checked~.checkmark:after {
	display: block;
}

/* Style the checkmark/indicator */
.table100-nextcols .checkmark:after {
	left: 0.35em;
	top: 0.12em;
	width: 6px;
	height: 12px;
	border: solid white;
	border-width: 0 0.15em 0.15em 0;
	transform: rotate(45deg);
}
/* Bottom */


</style>