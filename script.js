const tools = document.querySelectorAll('.tool');
const tooltip = document.getElementById('tooltip');
const robotImage = document.getElementById('robot');

// Add hover event listeners to each tool
tools.forEach(tool => {
    tool.addEventListener('mouseenter', function() {
        const toolName = this.getAttribute('data-tool');
        const toolImage = this.getAttribute('data-image');

        // Blur other tools
        tools.forEach(t => {
            if (t !== this) {
                t.style.filter = 'blur(4px)';
            }
        });

        // Change center robot image
        robotImage.src = toolImage;

        // Show tooltip with details
        tooltip.innerText = toolName; // Add more details as needed
        tooltip.classList.remove('hidden');
        positionTooltip(this);
    });

    tool.addEventListener('mouseleave', function() {
        // Clear blur effect on all tools
        tools.forEach(t => {
            t.style.filter = 'none';
        });

        // Revert center robot image
        robotImage.src = 'default-robot.png'; // Default robot image

        // Hide tooltip
        tooltip.classList.add('hidden');
    });
});

// Function to position the tooltip
function positionTooltip(tool) {
    const rect = tool.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.top + window.scrollY - 40}px`; // Adjust as needed
}
