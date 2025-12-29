// CD collection script
document.addEventListener('DOMContentLoaded', () => {
    // Load CD collection
    fetch('cds.json')
        .then(response => response.json())
        .then(data => {
            const cdList = document.getElementById('cd-list');
            const cdStats = document.getElementById('cd-stats');
            const total = data.length;
            const averageYear = Math.round(data.reduce((sum, cd) => sum + cd.year, 0) / total);
            cdStats.innerHTML = `<p><strong>Total CDs:</strong> ${total}<br><strong>Average Release Year:</strong> ${averageYear}</p>`;

            // Prepare data for chart
            const yearCounts = {};
            data.forEach(cd => {
                yearCounts[cd.year] = (yearCounts[cd.year] || 0) + 1;
            });
            const labels = Object.keys(yearCounts).sort();
            const values = labels.map(year => yearCounts[year]);

            // Create chart
            const ctx = document.getElementById('cd-chart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'CDs per Year',
                        data: values,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            const renderCDs = (cds) => {
                cdList.innerHTML = '';
                cds.forEach(cd => {
                    const cdItem = document.createElement('div');
                    cdItem.className = 'cd-item';
                    cdItem.innerHTML = `
                        <img src="${cd.cover}" alt="${cd.title} cover" style="width: 100px; height: 100px; margin-right: 1rem;">
                        <div>
                            <strong>${cd.title}</strong><br>
                            by ${cd.artist} (${cd.year})<br>
                            ${cd.discogs ? `<a href="${cd.discogs}" target="_blank">Discogs</a>` : ''}
                        </div>
                    `;
                    cdList.appendChild(cdItem);
                });
            };

            renderCDs(data);

            // Filter functionality
            document.getElementById('filter-all').addEventListener('click', () => {
                renderCDs(data);
            });

            document.getElementById('filter-year').addEventListener('click', () => {
                const sorted = [...data].sort((a, b) => b.year - a.year);
                renderCDs(sorted);
            });

            document.getElementById('filter-title').addEventListener('click', () => {
                const sorted = [...data].sort((a, b) => a.title.localeCompare(b.title));
                renderCDs(sorted);
            });

            document.getElementById('filter-artist').addEventListener('click', () => {
                const sorted = [...data].sort((a, b) => a.artist.localeCompare(b.artist));
                renderCDs(sorted);
            });
        })
        .catch(error => console.error('Error loading CDs:', error));
});