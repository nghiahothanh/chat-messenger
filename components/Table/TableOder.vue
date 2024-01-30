<template>
	<div>
		<v-container>
			<v-table>
				<thead>
					<tr>
						<th class="text-left">
							Name
						</th>
						<th class="text-left">
							Request
						</th>
						<th class="text-left">
							Status
						</th>
						<th class="text-left">
							Price
						</th>
						<th class="text-left">
							CreatedAt
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item, index in dataCatalog" :key="index">
						<td>{{ item.Properties.name }}</td>
						<td>{{ item.Properties.Request }}</td>
						<td>{{ item.Properties.Status }}</td>
						<td v-if="item.Properties.Price">
							{{ item.Properties.Price }}
						</td>
						<td v-else>
							0.00$
						</td>
						<td>{{ item.CreatedAt }}</td>
					</tr>
				</tbody>
			</v-table>
		</v-container>
	</div>
</template>

<script>
export default {
	name: "TableOrder",
	props: {
		dataCatalog: {
			type: Object,
			default:() => ({ Status: {}, Properties: {}})
            
		}

	},
	data() {
		return {

		};
	}

};
</script>

<style lang="scss" scoped></style>