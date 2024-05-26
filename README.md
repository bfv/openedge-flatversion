# openegde-flatversion
Github action turning an OpenEdge version into a flat version string (12.8.2 --> 128)

## usage 

```
- name: Check unit tests
  id: unit-test
  uses: bfv/openedge-flatversion@v1.1.0
  with:
    version: '12.8.2'
```
The results can be used like:
```
echo "flat-version is ${{ steps.unit-test.outputs.flat-version }}"
echo "release-version is ${{ steps.unit-test.outputs.release-version }}"
```

