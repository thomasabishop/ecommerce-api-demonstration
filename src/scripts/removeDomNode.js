/*
 * Remove product listings from the DOM on either the clear event or when new API requests are issued
 * @function removeDomNode
 * @param {object} parentNode : the parent node containing the products listing
 * @param{object} nodeToRemove: the node to be removed from the parent
 * @return {} : side-effect - the child node is removed from parent
 * @example removeDomNode(productGrid)
 */

export default function clearProducts(parentNode, nodeToRemove) {
  return (
    parentNode.contains(nodeToRemove) && parentNode.removeChild(nodeToRemove)
  );
}
