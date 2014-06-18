<div class="container" ng-controller="beachesCtrl">
	<h3>Low Country Beaches</h3>
	<ul>
		<li ng-repeat="beach in beaches">
			{{ beach.name }} - {{beach.island}}
		</li>
	</ul>
</div>

<script>
	function beachesCtrl ($scope) {

		$scope.beaches = [
		{ name: 'morris', beach: 'MorrisIsland' }
		{ name: 'edisto', beach: 'EdistoBeach' }
		{ name: 'bull', beach: 'BullIsland' }
		{ name: 'goat', beach: 'GoatIsland' }
		{ name: 'monkey', beach: 'MonkeyIsland' }

		];

	}

</script>	