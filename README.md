# openegde-flatversion
Github action turning an OpenEdge version into a flat version string and a release version (12.8.2 --> 128 & 12.8)

## usage 

```
- name: Get OpenEdge version
  id: get-oeversion
  uses: bfv/openedge-flatversion@v1.1.0
  with:
    version: '12.8.2'
```
The results can be used like:
```
echo "flat-version is ${{ steps.get-oeversion.outputs.flat-version }}"  # 128
echo "release-version is ${{ steps.get-oeversion.outputs.release-version }}"  # 12.8
echo "base-version is ${{ steps.get-oeversion.outputs.base-version }}"  # 12.8.0

```

