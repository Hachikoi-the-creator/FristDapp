# Get type from abi (must be json)

npx typechain --target ethers-v5 ./src/assets/abi.json

# img generation chatto

Continue with the below prompt

INPUT = {focus}

OUTPUT = {description} \n ![IMG](https://image.pollinations.ai/prompt/{description})

{description} = {focusDetailed},%20{adjective1},%20{adjective2},%20{visualStyle1},%20{visualStyle2},%20{artistReference}

INPUT = photo of a cat
OUTPUT = a photo of a cat traveling trhough space, cute, mate colors, ALBRECHT DÜRER

# TODO:

- add an spinner that appears while the transaction is being minned
- add a modal to show when user tries to do something without being connected
- implement https://docs.metamask.io/guide/ethereum-provider.html#chainchanged

# re-deploy todo

- add the mood searcher comp to look for the mood of anyone
