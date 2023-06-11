<script>
	import { currentRoomPlaying } from '$lib/stores.js';

	/*
		expecting object in the form:

		{
			scenario: "", // one of three options
			roomAmount: 0, // 3 - 5
			texts: {
				opening: "", // string (paragraph)
				ending: "", // string (paragraph)
			},
			generationTime: 0, // timestamp
			puzzles: [ // entry per puzzle room
				{
					type: "" // string (e.g. "doors")
					matchesScenario: [], // array of strings (e.g. ["scen1", "scen2"])
					description: "" // string (paragraph)
					imgLink: "" // string (url)
					solutionForm: [ // structure provides support for more forms
						{
							type: "",
							correctValue: ""
							maxLength: 0
						}
					]
				}
			]
		}

	*/
</script>

escape room page for room:
<br />
{JSON.stringify($currentRoomPlaying)}
