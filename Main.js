window.StopReposter = false;

async function AutoRemoveReposts() {
    while (!window.StopReposter) {
        try {
            const RepostButton = document.querySelector('a[data-e2e="video-share-repost"]');
            if (RepostButton) {
                RepostButton.click();
                console.log("-> Removed Repost");
                await new Promise(r => setTimeout(r, 700));
            };
      
            const NextButton = document.querySelector('button[data-e2e="arrow-right"]');
            if (NextButton) {
                NextButton.click();
                console.log("-> Moving to next video");
                await new Promise(r => setTimeout(r, 700));
            } else {
                console.warn("-> Failed to find next button");
                await new Promise(r => setTimeout(r, 2000));
            };
        } catch (Error) {
            console.error("Error:", Error);
            await new Promise(r => setTimeout(r, 2000));
        };
    };

    console.log("Stopped removing reposts");
};

AutoRemoveReposts();
