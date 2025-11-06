class KTGeneralWidgets {
	static initCompanyProfileMap() {
		const element = 'company_profile_map';

		if (!KTDom.getElement(`#${element}`)) return;

		// Check if Leaflet is included
		if (!L) {
			return;
		}

		// Define Map Location
		const leaflet = L.map(element, {
			center: [40.725, -73.985],
			zoom: 30,
		});

		// Init Leaflet Map. For more info check the plugin's documentation: https://leafletjs.com/
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(leaflet);

		// Set Geocoding
		let geocodeService;
		if (typeof L.esri.Geocoding === 'undefined') {
			geocodeService = L.esri.geocodeService();
		} else {
			geocodeService = L.esri.Geocoding.geocodeService();
		}

		// Define Marker Layer
		const markerLayer = L.layerGroup().addTo(leaflet);

		// Set Custom SVG icon marker
		const leafletIcon = L.divIcon({
			html: `<i class="ki-solid ki-geolocation text-3xl text-green-500"></i>`,
			bgPos: [10, 10],
			iconAnchor: [20, 37],
			popupAnchor: [0, -37],
			className: 'leaflet-marker',
		});

		// Show current address
		L.marker([40.724716, -73.984789], { icon: leafletIcon })
			.addTo(markerLayer)
			.bindPopup('430 E 6th St, New York, 10009.', { closeButton: false })
			.openPopup();

		// Map onClick Action
		leaflet.on('click', function (e) {
			geocodeService
				.reverse()
				.latlng(e.latlng)
				.run(function (error, result) {
					if (error) {
						return;
					}
					markerLayer.clearLayers();
					const selectedlocation = result.address.Match_addr;
					L.marker(result.latlng, { icon: leafletIcon })
						.addTo(markerLayer)
						.bindPopup(result.address.Match_addr, { closeButton: false })
						.openPopup();
				});
		});
	}

	static initContributionChart() {
		const data = [44, 55, 41, 17, 15];
		const labels = ['ERP', 'HRM', 'DMS', 'CRM', 'DAM'];
		const colors = [
			'var(--color-primary)',
			'var(--color-destructive)',
			'var(--color-green-500)',
			'var(--color-violet-500)',
			'var(--color-yellow-500)',
		];

		const options = {
			series: data,
			labels: labels,
			colors: colors,
			fill: {
				colors: colors,
			},
			chart: {
				type: 'donut',
			},
			stroke: {
				show: true,
				width: 2, // Set the width of the border
				colors: 'var(--color-border)', // Set the color of the border
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				pie: {
					expandOnClick: false,
				},
			},
			legend: {
				offsetY: -10,
				offsetX: -10,
				fontSize: '13px', // Set the font size
				fontWeight: '500', // Set the font weight
				itemMargin: {
					vertical: 1, // Reduce the vertical margin between legend items
				},
				labels: {
					colors: 'var(--color-secondary-foreground)', // Set the font color for the legend text
					useSeriesColors: false, // Optional: Set to true to use series colors for legend text
				},
				markers: {
					width: 8,
					height: 8,
				},
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		};

		const element = document.querySelector('#contributions_chart');
		if (!element) return;

		const chart = new ApexCharts(element, options);
		chart.render();
	}

	static initMediaUploadsChart() {
		const data = [85, 65, 50, 70, 40, 45, 100, 55, 85, 60, 70, 90];
		const categories = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		const options = {
			series: [
				{
					name: 'series1',
					data: data,
				},
			],
			chart: {
				height: 250,
				type: 'area',
				toolbar: {
					show: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: false,
			},
			stroke: {
				curve: 'smooth',
				show: true,
				width: 3,
				colors: ['var(--color-primary)'],
			},
			xaxis: {
				categories: categories,
				axisBorder: {
					show: false,
				},
				maxTicks: 12,
				axisTicks: {
					show: false,
				},
				labels: {
					style: {
						colors: 'var(--color-white)',
						fontSize: '12px',
					},
				},
				crosshairs: {
					position: 'front',
					stroke: {
						color: 'var(--color-primary)',
						width: 1,
						dashArray: 3,
					},
				},
				tooltip: {
					enabled: false,
					formatter: undefined,
					offsetY: 0,
					style: {
						fontSize: '12px',
					},
				},
			},
			yaxis: {
				min: 0,
				max: 100,
				tickAmount: 5, // This will create 5 ticks: 0, 20, 40, 60, 80, 100
				axisTicks: {
					show: false,
				},
				labels: {
					style: {
						colors: 'var(--color-white)',
						fontSize: '12px',
					},
					formatter: (value) => {
						return `$${value}K`;
					},
				},
			},
			tooltip: {
				enabled: true,
				custom({ series, seriesIndex, dataPointIndex, w }) {
					const number = parseInt(series[seriesIndex][dataPointIndex]) * 1000;
					const month = w.globals.seriesX[seriesIndex][dataPointIndex];
					const monthName = categories[month];

					const formatter = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					});

					const formattedNumber = formatter.format(number);

					return `
						<div class="flex flex-col gap-2 p-3.5">
							<div class="font-medium text-2sm text-white">${monthName}, 2025 Sales</div>
							<div class="flex items-center gap-1.5">
								<div class="font-semibold text-md text-mono">${formattedNumber}</div>
								<span class="kt-kt-badge kt-kt-badge-outline kt-kt-badge-success kt-badge-sm">+24%</span>
							</div>
						</div>
						`;
				},
			},
			markers: {
				size: 0,
				colors: 'var(--color-primary-foreground)',
				strokeColors: 'var(--color-primary)',
				strokeWidth: 4,
				strokeOpacity: 1,
				strokeDashArray: 0,
				fillOpacity: 1,
				discrete: [],
				shape: 'circle',
				radius: 2,
				offsetX: 0,
				offsetY: 0,
				onClick: undefined,
				onDblClick: undefined,
				showNullDataPoints: true,
				hover: {
					size: 8,
					sizeOffset: 0,
				},
			},
			fill: {
				gradient: {
					enabled: true,
					opacityFrom: 0.25,
					opacityTo: 0,
				},
			},
			grid: {
				borderColor: 'var(--color-border)',
				strokeDashArray: 5,
				clipMarkers: false,
				yaxis: {
					lines: {
						show: true,
					},
				},
				xaxis: {
					lines: {
						show: false,
					},
				},
			},
		};

		const element = document.querySelector('#media_uploads_chart');
		if (!element) return;

		const chart = new ApexCharts(element, options);
		chart.render();
	}

	static initEarningsChart() {
		const data = [75, 25, 45, 15, 85, 35, 70, 25, 35, 15, 45, 30];
		const categories = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		const options = {
			series: [
				{
					name: 'series1',
					data: data,
				},
			],
			chart: {
				height: 250,
				type: 'area',
				toolbar: {
					show: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: false,
			},
			stroke: {
				curve: 'smooth',
				show: true,
				width: 3,
				colors: ['var(--color-primary)'],
			},
			xaxis: {
				categories: categories,
				axisBorder: {
					show: false,
				},
				maxTicks: 12,
				axisTicks: {
					show: false,
				},
				labels: {
					style: {
						colors: 'var(--color-muted-foreground)',
						fontSize: '12px',
					},
				},
				crosshairs: {
					position: 'front',
					stroke: {
						color: 'var(--color-primary)',
						width: 1,
						dashArray: 3,
					},
				},
				tooltip: {
					enabled: false,
					formatter: undefined,
					offsetY: 0,
					style: {
						fontSize: '12px',
					},
				},
			},
			yaxis: {
				min: 0,
				max: 100,
				tickAmount: 5, // This will create 5 ticks: 0, 20, 40, 60, 80, 100
				axisTicks: {
					show: false,
				},
				labels: {
					style: {
						colors: 'var(--color-muted-foreground)',
						fontSize: '12px',
					},
					formatter: (value) => {
						return `$${value}K`;
					},
				},
			},
			tooltip: {
				enabled: true,
				custom({ series, seriesIndex, dataPointIndex, w }) {
					const number = parseInt(series[seriesIndex][dataPointIndex]) * 1000;
					const month = w.globals.seriesX[seriesIndex][dataPointIndex];
					const monthName = categories[month];

					const formatter = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					});

					const formattedNumber = formatter.format(number);

					return `
						<div class="flex flex-col gap-2 p-3.5">
							<div class="font-medium text-2sm text-white">${monthName}, 2025 Sales</div>
							<div class="flex items-center gap-1.5">
								<div class="font-semibold text-md text-mono">${formattedNumber}</div>
								<span class="kt-badge kt-badge-outline kt-badge-success kt-badge-xs">+24%</span>
							</div>
						</div>
						`;
				},
			},
			markers: {
				size: 0,
				colors: 'var(--color-primary)',
				strokeColors: 'var(--color-primary)',
				strokeWidth: 4,
				strokeOpacity: 1,
				strokeDashArray: 0,
				fillOpacity: 1,
				discrete: [],
				shape: 'circle',
				radius: 2,
				offsetX: 0,
				offsetY: 0,
				onClick: undefined,
				onDblClick: undefined,
				showNullDataPoints: true,
				hover: {
					size: 8,
					sizeOffset: 0,
				},
			},
			fill: {
				gradient: {
					enabled: true,
					opacityFrom: 0.25,
					opacityTo: 0,
				},
			},
			grid: {
				borderColor: 'var(--color-border)',
				strokeDashArray: 5,
				clipMarkers: false,
				yaxis: {
					lines: {
						show: true,
					},
				},
				xaxis: {
					lines: {
						show: false,
					},
				},
			},
		};

		const element = document.querySelector('#earnings_chart');
		if (!element) return;

		const chart = new ApexCharts(element, options);
		chart.render();
	}

	static initOrdersChart() {
		const data = [
			70, 60, 75, 55, 35, 80, 100, 70, 90, 65, 50, 85, 60, 75, 65, 80,
		];
		const categories = [
			'Sep 8',
			'',
			'',
			'',
			'',
			'Sep 13',
			'',
			'',
			'',
			'',
			'Sep 18',
			'',
			'',
			'',
			'',
			'Sep 23',
		];

		const options = {
			series: [
				{
					name: 'series1',
					data: data,
				},
			],
			chart: {
				height: 200,
				type: 'area',
				toolbar: {
					show: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: false,
			},
			stroke: {
				curve: 'smooth',
				show: true,
				width: 3,
				colors: ['var(--color-primary)'],
			},
			xaxis: {
				categories: categories,
				axisBorder: {
					show: false,
				},
				maxTicks: 12,
				axisTicks: {
					show: false,
				},
				labels: {
					rotate: 0,
					style: {
						colors: 'var(--color-secondary-foreground)',
						fontSize: '12px',
						fontWeight: '400',
					},
				},
				crosshairs: {
					position: 'front',
					stroke: {
						color: 'var(--color-primary)',
						width: 1,
						dashArray: 3,
					},
				},
				tooltip: {
					enabled: false,
					formatter: undefined,
					offsetY: 0,
					style: {
						fontSize: '12px',
					},
				},
			},
			yaxis: {
				min: 0,
				max: 100,
				tickAmount: 3,
				labels: { show: false },
				axisTicks: { show: false },
				axisBorder: { show: false },
			},
			tooltip: {
				enabled: true,
				custom({ series, seriesIndex, dataPointIndex, w }) {
					const number = parseInt(series[seriesIndex][dataPointIndex]) * 1000;
					const month = w.globals.seriesX[seriesIndex][dataPointIndex];
					const monthName = categories[month];

					const formatter = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					});

					const formattedNumber = formatter.format(number);

					return `
						<div class="flex flex-col gap-2 p-3.5">
							<div class="font-medium text-2sm text-white">${monthName}, 2025 Sales</div>
							<div class="flex items-center gap-1.5">
								<div class="font-semibold text-md text-mono">${formattedNumber}</div>
								<span class="kt-badge kt-badge-outline kt-badge-success kt-badge-xs">+24%</span>
							</div>
						</div>
						`;
				},
			},
			markers: {
				size: 0,
				colors: 'var(--color-primary)',
				strokeColors: 'var(--color-primary)',
				strokeWidth: 4,
				strokeOpacity: 1,
				strokeDashArray: 0,
				fillOpacity: 1,
				discrete: [],
				shape: 'circle',
				radius: 2,
				offsetX: 0,
				offsetY: 0,
				onClick: undefined,
				onDblClick: undefined,
				showNullDataPoints: true,
				hover: {
					size: 8,
					sizeOffset: 0,
				},
			},
			fill: {
				gradient: {
					enabled: true,
					opacityFrom: 0.25,
					opacityTo: 0,
				},
			},
			grid: {
				borderColor: 'var(--color-border)',
				strokeDashArray: 3,
				yaxis: { lines: { show: true } },
				xaxis: { lines: { show: false } },
			},
		};

		const element = document.querySelector('#orders_chart');
		if (!element) return;

		const chart = new ApexCharts(element, options);
		chart.render();
	}

	static initMyBalanceChart(chartId, data, categories) {
		const options = {
			series: [
				{
					name: 'series1',
					data: data,
				},
			],
			chart: {
				height: 250,
				type: 'area',
				toolbar: {
					show: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: false,
			},
			stroke: {
				curve: 'smooth',
				show: true,
				width: 3,
				colors: ['var(--color-primary)'],
			},
			xaxis: {
				categories: categories,
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				labels: {
					style: {
						colors: 'var(--color-secondary-foreground)',
						fontSize: '12px',
					},
				},
				crosshairs: {
					position: 'front',
					stroke: {
						color: 'var(--color-primary)',
						width: 1,
						dashArray: 3,
					},
				},
				tooltip: {
					enabled: false,
					formatter: undefined,
					offsetY: 0,
					style: {
						fontSize: '12px',
					},
				},
			},
			yaxis: {
				min: 0,
				max: 100,
				tickAmount: 5,
				axisTicks: {
					show: false,
				},
				labels: {
					style: {
						colors: 'var(--color-secondary-foreground)',
						fontSize: '12px',
					},
					formatter: (value) => {
						return `$${value}K`;
					},
				},
			},
			tooltip: {
				enabled: true,
				custom({ series, seriesIndex, dataPointIndex, w }) {
					const number = parseInt(series[seriesIndex][dataPointIndex]) * 1000;
					const month = w.globals.seriesX[seriesIndex][dataPointIndex];
					const monthName = categories[month];

					const formatter = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					});

					const formattedNumber = formatter.format(number);

					return `
						<div class="flex flex-col gap-2 p-3.5">
							<div class="font-medium text-2sm text-white">${monthName}, 2025 Sales</div>
							<div class="flex items-center gap-1.5">
								<div class="font-semibold text-md text-mono">${formattedNumber}</div>
								<span class="kt-badge kt-badge-outline kt-badge-success kt-badge-sm">+24%</span>
							</div>
						</div>
						`;
				},
			},
			markers: {
				size: 0,
				colors: 'var(--color-primary)',
				strokeColors: 'var(--color-primary)',
				strokeWidth: 4,
				strokeOpacity: 1,
				strokeDashArray: 0,
				fillOpacity: 1,
				discrete: [],
				shape: 'circle',
				radius: 2,
				offsetX: 0,
				offsetY: 0,
				onClick: undefined,
				onDblClick: undefined,
				showNullDataPoints: true,
				hover: {
					size: 8,
					sizeOffset: 0,
				},
			},
			fill: {
				gradient: {
					enabled: true,
					opacityFrom: 0.25,
					opacityTo: 0,
				},
			},
			grid: {
				borderColor: 'var(--color-border)',
				strokeDashArray: 5,
				clipMarkers: false,
				yaxis: {
					lines: {
						show: true,
					},
				},
				xaxis: {
					lines: {
						show: false,
					},
				},
			},
		};

		const element = document.querySelector(`#${chartId}`);
		if (!element) return;

		// Destroy the old chart instance if it exists
		if (element.chart) {
			element.chart.destroy();
		}

		const chart = new ApexCharts(element, options);
		element.chart = chart; // Store the chart instance on the element
		chart.render();
	}

	static initTeamsDatatable() {
		const datatableEl = document.querySelector('#teams_datatable');
		if (!datatableEl) return;

		const datatable = KTDataTable.getInstance(datatableEl);

		datatable.on('checked', () => {
			KTToast.show({
				message: 'You have checked a row',
				icon: '<i class="ki-filled ki-information-4 text-destructive text-xl"></i>',
				progress: true,
				pauseOnHover: true,
			});
		});

		datatable.on('unchecked', () => {
			KTToast.show({
				message: 'You have unchecked a row',
				progress: true,
				icon: '<i class="ki-filled ki-information-2 text-green-500 text-xl"></i>',
				variant: 'mono',
				pauseOnHover: true,
			});
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	// Initial chart rendering
	KTGeneralWidgets.initMyBalanceChart(
		'my_balance_chart',
		[75, 25, 45, 15, 85, 35, 70, 25, 35],
		['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
	);

	// Event listener for tab buttons
	document.querySelectorAll('.tab-button').forEach((button) => {
		button.addEventListener('click', (event) => {
			// Remove active class from all buttons
			document
				.querySelectorAll('.tab-button')
				.forEach((btn) => btn.classList.remove('active'));

			// Add active class to the clicked button
			event.target.classList.add('active');

			// Determine chart data and categories based on the clicked tab
			const chartId = 'my_balance_chart'; // You might need to adjust this if you have multiple charts
			let data, categories;
			switch (event.target.getAttribute('data-chart')) {
				case 'my_balance_chart1':
					data = [45, 35, 45, 35, 55, 85, 20, 25, 55];
					categories = [
						'Jan',
						'Feb',
						'Mar',
						'Apr',
						'May',
						'Jun',
						'Jul',
						'Aug',
						'Sep',
					];
					break;
				case 'my_balance_chart2':
					data = [25, 55, 65, 45, 25, 65, 50, 40, 60];
					categories = [
						'Oct',
						'Nov',
						'Dec',
						'Jan',
						'Feb',
						'Mar',
						'Apr',
						'May',
						'Jun',
					];
					break;
				case 'my_balance_chart3':
					data = [80, 40, 50, 20, 50, 80, 60, 20, 30];
					categories = [
						'Jul',
						'Aug',
						'Sep',
						'Oct',
						'Nov',
						'Dec',
						'Jan',
						'Feb',
						'Mar',
					];
					break;
				case 'my_balance_chart4':
					data = [20, 65, 20, 50, 70, 25, 40, 60, 80];
					categories = [
						'Jan',
						'Feb',
						'Mar',
						'Apr',
						'May',
						'Jun',
						'Jul',
						'Aug',
						'Sep',
					];
					break;
				default:
					data = [];
					categories = [];
			}

			// Update chart with new data and categories
			KTGeneralWidgets.initMyBalanceChart(chartId, data, categories);
		});
	});
});

KTDom.ready(() => {
	KTGeneralWidgets.initCompanyProfileMap();
	KTGeneralWidgets.initContributionChart();
	KTGeneralWidgets.initMediaUploadsChart();
	KTGeneralWidgets.initEarningsChart();
	KTGeneralWidgets.initOrdersChart();
	KTGeneralWidgets.initTeamsDatatable();
});
