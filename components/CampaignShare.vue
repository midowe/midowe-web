<template>
	<div class="share-area">
		<ul>
			<li>
				<a
					class="btn btn-outline"
					:href="`https://www.facebook.com/sharer/sharer.php?u=https://midowe.co.mz/${campaign.attributes.slug}`"
					target="_blank"
					><font-awesome-icon :icon="['fab', 'facebook']"
				/></a>
			</li>
			<li>
				<a
					class="btn btn-outline"
					:href="`https://twitter.com/intent/tweet?url=https://midowe.co.mz/${campaign.attributes.slug}&text=${campaign.attributes.title}`"
					target="_blank"
					><font-awesome-icon :icon="['fab', 'twitter']"
				/></a>
			</li>
			<li>
				<a
					class="btn btn-outline"
					:href="`whatsapp://send?text=${campaign.attributes.title} - https://midowe.co.mz/${campaign.attributes.slug}`"
					target="_blank"
					><font-awesome-icon :icon="['fab', 'whatsapp']" />
				</a>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.share-area {
	display: flex;
	flex-direction: column;
	margin-top: 6px;

	span {
		text-transform: uppercase;
		font-weight: 500;
	}

	ul {
		display: flex;
		gap: 10px;

		li a {
			width: auto;
			min-width: 0;
			padding: 0 15px;
			margin: 0;
		}
	}
}
</style>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faWhatsapp,
	faFacebook,
	faTwitter,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faWhatsapp);
library.add(faFacebook);
library.add(faTwitter);
library.add(faLinkedin);

export default defineComponent({
	components: {
		FontAwesomeIcon,
	},
});
</script>

<script setup lang="ts">
import { Campaign } from "~~/clients/campaign-client";

interface Props {
	campaign: Campaign;
}

const props = defineProps<Props>();
const campaign = props.campaign;
</script>
